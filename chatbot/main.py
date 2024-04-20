from openai import OpenAI
import pandas as pd
import numpy as np

client = OpenAI()

df = pd.read_csv('budget_embedding.csv',delimiter=';')
#print(df)
#print(df.columns)

df = df[["categorie","montant"]]
df = df.dropna()
#print(df.head(2))
#print(df.head())

def get_embeddings(word):
    response = client.embeddings.create(
        input=word,
        model="text-embedding-ada-002"
    )
    embedding = response.data[0].embedding
    return embedding
    

# Appliquer la fonction à chaque mot dans la colonne 'words'
df['embeddings'] = df['categorie'].apply(get_embeddings)



def main():
    while True:
        prompt = input("Entrez votre prompt ou tapez 'exit' pour quitter: ")
        if prompt.lower() == 'exit':
            break

#        budget_example = file=open("budget_input.json")
        completion = client.chat.completions.create(
        model="ft:gpt-3.5-turbo-0125:personal:fintech3:9FiGykCR",
        messages=[
            {"role": "system", "content": "Tu es un assistant banquier. Tu devras répondre en français. On va te donner en entrée le budget mensuel d'un client. Tu vas devoir refaire son budget pour économiser de l'argent. Il va s'acheter quelques choses, tu devras calculer d'abord quel sommes il devra économiser par mois en divisant le prix par le nombre de mois. Dans la modification du budget, tu devras pas toucher les lignes loyer credit,charge,assurance,credit vehicule,credit consommation, forfait telephone internet. La somme de la ligne salaire et autres salaire devra être égal a la somme de toutes les autres. "},
            {"role": "user", "content": f"Mon budget est: {df}"},
            {"role": "user", "content": f"{prompt} "}
        ]
        )
        print(completion.choices[0].message)
if __name__ == "__main__":
    main()