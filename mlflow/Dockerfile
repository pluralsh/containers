FROM ghcr.io/mlflow/mlflow:v2.10.1

COPY requirements.txt requirements.txt
RUN pip freeze | grep -i mlflow > protected-packages.txt \
 && pip install --constraint ./protected-packages.txt --no-cache-dir -r ./requirements.txt \
 && rm -rf ./protected-packages.txt ./requirements.txt

EXPOSE 5000

ENV BACKEND_URI sqlite:////mlflow/mlflow.db
ENV ARTIFACT_ROOT /mlflow/artifacts

CMD mlflow server --backend-store-uri ${BACKEND_STORE_URI} --default-artifact-root ${ARTIFACT_ROOT} --host 0.0.0.0 --port 5000
