Kubernetes zero downtime deployments demo
=========================================

Sample application to test various Kubernetes deployment scenarios.

Install:

```sh
# my-values bit is optional
helm install -f my-values charts/zero-downtime-demo
```

Adding traffic:
```sh
# siege shows every request directly in terminal which is ood for immediate feedback (ab & wrk do not)
siege -c1 https://<my-host>/
```

Scenarios
---------

### Rolling update

```sh
kubectl rollout restart deployment/demo-zero-downtime-demo
```

### Kill pod

```sh
kubectl delete pod <my-pod>
```
