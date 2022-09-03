### Minikube

Set shell context to minikube's docker daemon
```
eval $(minikube docker-env)
```

Build app image
```
docker build -t app:latest .
```

Create configmaps with all required configs
```
kubectl create configmap app-provision \
    --from-file=./prometheus/prometheus.yml \
    --from-file=./grafana/provisioning/dashboards/dashboard.yml \
    --from-file=./grafana/provisioning/datasources/datasource.yml \
    --from-file=./grafana/dashboard.json
```

Apply k8s config
```
kubectl apply -f k8s.yml
```

Enable access to the express app and grafana from the host machine
```
[terminal #1] kubectl port-forward svc/app 80:80
[terminal #2] kubectl port-forward svc/grafana 3000:3000
```

### Usage

To apply some load to the express app, run ```./generate_requests.sh``` script in a separate terminal

Visit localhost:3000 (username=admin, password=admin) in your browser and check Responses chart in General folder
