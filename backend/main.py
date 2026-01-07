from fastapi import FastAPI

app = FastAPI()

@app.get("/")
async def initialize():
    print("Initialized")
