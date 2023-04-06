FROM apache/airflow:2.5.3-python3.9

USER root
RUN apt-get update && apt-get install git -y

USER airflow

COPY requirements.txt requirements.txt
RUN pip freeze | grep -i apache-airflow > protected-packages.txt \
 && pip install --constraint ./protected-packages.txt --no-cache-dir -r requirements.txt \
 && rm -rf protected-packages.txt requirements.txt
