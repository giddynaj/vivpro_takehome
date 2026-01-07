from fastapi import FastAPI, Depends
from typing import Optional
from fastapi.middleware.cors import CORSMiddleware
import pandas as pd

origins = [
    'http://localhost:5173'
]

app = FastAPI()
app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_methods=["*"],
    allow_headers=["*"]
)

df = pd.read_json('./playlist.json')

@app.get("/")
async def initialize():
    print(df.transpose())
    return { "status": "ok"}

@app.get("/playlists")
async def get_playlists(
    title: str | None = None,
    limit: int | None = 10,
    page: int | None = 1
):
    if (title):
        df_prep = df[df['title'] == title]
    else:
        skip = (page - 1) * 10
        df_prep = df.iloc[skip:limit + skip]
        #TODO: Default sort, other sort is implemented client side
        df_prep = df_prep.sort_values(by='title', ascending=True)
    df_json = df_prep.to_json(orient='records')
    return { "status": "ok", "title": title, "totalCount": 100, "json": df_json}
