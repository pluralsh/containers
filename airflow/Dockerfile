FROM apache/airflow:2.2.5-python3.8

USER root
RUN apt-get -yq update \
 && apt-get -yq upgrade \
 && apt-get -yq install --no-install-recommends \
    git \
 && apt-get clean \
 && rm -rf /var/lib/apt/lists/*

USER airflow

COPY requirements.txt requirements.txt
RUN pip freeze | grep -i apache-airflow > protected-packages.txt \
 && pip install --constraint ./protected-packages.txt --no-cache-dir -r requirements.txt \
 && rm -rf protected-packages.txt requirements.txt
