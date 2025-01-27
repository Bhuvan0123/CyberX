import json
from django.shortcuts import render
from rest_framework.decorators import api_view
from rest_framework.response import Response
import requests
from django.http import JsonResponse
# Create your views here.

@api_view(["GET"])
def getroute(request):
    return Response({"message":"Welcome to python, Start the journey"})

@api_view(["POST"])
def uploadfile(request):
    if "uploadfile" not in request.FILES:
        return JsonResponse({"error": "No file found"}, status=400)
    file=request.FILES["uploadfile"]
    sightengine_url = 'https://api.sightengine.com/1.0/check.json'
    api_key = '783990292'
    api_secret = 'MX6zidCrhG928CoXnRGRbH7sXjBV9JmA'

    # Send the file to Sightengine API
    try:
        response = requests.post(
            sightengine_url,
            files={'media': file},
            data={
                'models': 'genai',  # Example models, adjust based on your need
                'api_user': api_key,
                'api_secret': api_secret,
            }
        )
        analysis_result = response.json()
        ai_generated_value = analysis_result.get('type', {}).get('ai_generated', None)

        # Return only the 'ai_generated' value
        if ai_generated_value is not None:
            return JsonResponse({'ai_generated': ai_generated_value})
        return JsonResponse(analysis_result)
    

    except Exception as e:
        return JsonResponse({'error': str(e)}, status=500)
