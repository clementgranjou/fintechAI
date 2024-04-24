import pandas as pd
import numpy as np
from openai import OpenAI


client = OpenAI()

df = pd.read_csv('budget_embedding.csv',delimiter=';')
print(df)
print(df.columns)

df = df[["categorie","montant"]]
df = df.dropna()
print(df.head(2))
#print(df.head())

def get_embeddings(word):
    response = client.embeddings.create(
        input=word,
        model="text-embedding-3-large"
    )
    return response['data'][0]['embedding']  # Retourne l'embedding du mot

# Appliquer la fonction à chaque mot dans la colonne 'words'
df['embeddings'] = df['categorie'].apply(get_embeddings)


def main():
    while True:
        prompt = input("Entrez votre prompt ou tapez 'exit' pour quitter: ")
        if prompt.lower() == 'exit':
            break

#        budget_example = file=open("budget_input.json")
        completion = client.chat.completions.create(
        model="ft:gpt-3.5-turbo-0125:personal::9D7Zkxpq",
        messages=[
            {"role": "system", "content": "You are a helpful assistant."},
            {"role": "user", "content": "This is my budget: {df}"},
            {"role": "user", "content": f"{prompt} "}
        ]
        )
        print(completion.choices[0].message)
if __name__ == "__main__":
    main()