import { ApiRepository } from './api.repository'

const apiRepository = new ApiRepository()

apiRepository.getWeatherFromServiceA(51.5074, 0.1278)
    .then(data => console.log(data))

apiRepository.getWeatherFromServiceB(51.5074, 0.1278)
    .then(data => console.log(data))