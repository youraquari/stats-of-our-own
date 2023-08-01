from flask import Flask, jsonify
from waitress import serve
import AO3

app = Flask(__name__)


@app.route("/api/user/<id>")
def get_user(id):
    user = AO3.User(id)
    works = user.get_works()
    data = {"username": id, "bio": user.bio, "works": []}
    for work in works:
        data["works"].append(work.metadata)
    return jsonify(data)
