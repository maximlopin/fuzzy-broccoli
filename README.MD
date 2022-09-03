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
kubectl create configmap prometheus-provision \
    --from-file=./prometheus/prometheus.yml \

kubectl create configmap grafana-provision \
    --from-file=./grafana/provisioning/dashboards/dashboard.yml \
    --from-file=./grafana/provisioning/datasources/datasource.yml \
    --from-file=./grafana/dashboard.json
```

Apply k8s config
```
kubectl apply -f k8s.yml
```

Forward ports to enable access from the host machine
```
kubectl port-forward svc/grafana-svc 3000:3000 & \
    kubectl port-forward svc/app-svc 80:80
```

Grafana is now available at localhost:3000, login in admin, password is admin
Express app is now available at localhost:80

To apply some load to the express app, run ./generate_requests.sh script
You will see the load reflected on grafana charts

