# SonarCube + Angular Example

Example Angular project with SonarQube configuration.

To get both code analysis and coverage, first run:

```
ng test --watch false --source-map true --code-coverage
sonar-scanner -Dsonar.login=*
```