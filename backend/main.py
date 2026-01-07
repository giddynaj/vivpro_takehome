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
