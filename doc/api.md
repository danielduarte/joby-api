# API

## Routes


### Job Searches

| Method    | Path                   | Description                   |
|-----------|------------------------|-------------------------------|
| `GET`     | `/job-searches`        | Get the list of job searches. |
| `POST`    | `/job-searches`        | Create a job search.          |
| `GET`     | `/job-searches/{jsId}` | Get a job search by id.       |
| `PATCH`   | `/job-searches/{jsId}` | Update a job search by id.    |
| `DELETE`  | `/job-searches/{jsId}` | Delete a job search by id.    |


### Applications

All application are assigned to a job search.

| Method    | Path                                        | Description                                    |
|-----------|---------------------------------------------|------------------------------------------------|
| `GET`     | `/job-searches/{jsId}/applications`         | Get the list of applications for a job search. |
| `POST`    | `/job-searches/{jsId}/applications`         | Create an application for a job search.        |
| `GET`     | `/job-searches/{jsId}/applications/{appId}` | Get an application by id.                      |
| `PATCH`   | `/job-searches/{jsId}/applications/{appId}` | Update an application by id.                   |
| `DELETE`  | `/job-searches/{jsId}/applications/{appId}` | Delete an application by id.                   |


### Application Updates

All updates belong to an application.

| Method    | Path                                                      | Description                                |
|-----------|-----------------------------------------------------------|--------------------------------------------|
| `GET`     | `/job-searches/{jsId}/applications/{appId}/updates`       | Get the list of updates of an application. |
| `POST`    | `/job-searches/{jsId}/applications/{appId}/updates`       | Create an application update.              |
| `GET`     | `/job-searches/{jsId}/applications/{appId}/updates/{uId}` | Get an application update by id.           |
| `PATCH`   | `/job-searches/{jsId}/applications/{appId}/updates/{uId}` | Update an application update by id.        |
| `DELETE`  | `/job-searches/{jsId}/applications/{appId}/updates/{uId}` | Delete an application update by id.        |
