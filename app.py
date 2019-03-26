from flask import Flask, jsonify

app = Flask(__name__)

@app.route("/hello")
def hello():
    hello = "Hello"
    return jsonify({'data': hello})


if __name__ == "__main__":
    app.run(debug=True)