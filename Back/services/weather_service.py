
import requests
import os
from dotenv import load_dotenv

load_dotenv()

API_KEY = os.getenv("API_KEY")

def get_weather (city):
    if not API_KEY:
        return {"error": "API key not found"}
    
    url = f"http://api.weatherapi.com/v1/forecast.json?key={API_KEY}&q={city}&days=1&aqi=no&alerts=no"

    try:
        response = requests.get(url)
        data= response.json()

        if response.status_code != 200:
            return None
        
        return {
            "city": data["location"]["name"],
            "country": data["location"]["country"],
            "temperature": data["current"]["temp_c"],
            "condition": data["current"]["condition"]["text"],
            "icon": data["current"]["condition"]["icon"],

            # Hourly Data
            "hourly": [
                {
                    "time": hour["time"],
                    "temp": hour["temp_c"],
                    "icon": hour["condition"]["icon"]
                }
                for hour in data["forecast"]["forecastday"][0]["hour"]
            ]

        }
    
    except Exception as e:
        return {"error": str(e)}

