from flask import render_template, request
import google.generativeai as genai
from dotenv import load_dotenv
from os import getenv
from app import app

load_dotenv()

genai.configure(api_key=getenv("API_KEY"))


@app.route("/", methods=["GET", "POST"])
def index():
    if request.method == "POST":
        user_input = request.form.get("input")
        model = genai.GenerativeModel(model_name="gemini-1.5-flash-latest")
        chat_session = model.start_chat(history=[])
        chat_session.send_message(user_input)
        history = [chunk.parts[0].text for chunk in chat_session.history]
        return render_template("index.html", chat_session=history)
    return render_template("index.html", chat_session=None)
