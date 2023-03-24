FROM apache/airflow:1.2.1-python3.10

USER root
RUN apt-get update && apt-get install git -y

USER airflow

COPY requirements.txt requirements.txt
RUN pip install -r requirements.txt
