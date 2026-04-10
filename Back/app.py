
from flask import Flask, request, jsonify
from flask_cors import CORS
from services.weather_service import get_weather

app= Flask(__name__)
CORS(app)

@app.route("/weather", methods=["GET"])

def weather():
    city = request.args.get("city")

    if not city:
        return jsonify({"error": "City is required"}),400
    
    data= get_weather(city)

    if not data:
        return jsonify({"error": "Failed to fetch weather"}), 500

    if "error" in data:
        return jsonify(data), 400  
    
    return jsonify(data),200
    
if __name__ == "__main__":
    app.run(debug=True)
