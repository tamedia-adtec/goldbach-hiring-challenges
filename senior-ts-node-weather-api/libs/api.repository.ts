export default class ApiRepository {

    private isBrokenValue = () => Math.random() > (1 / 2)

    private getWeatherData = async (lat: number, long: number) => {
        const url = `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${long}&current=temperature_2m`
        const response = await fetch(url)
        const data = await response.json()
        return data
    }
    
    public getWeatherFromServiceA = async (lat: number, long: number): Promise<unknown> => {
       try {
            await new Promise(resolve => setTimeout(resolve, 100))
            const data = await this.getWeatherData(lat, long)
            return { temp: this.isBrokenValue() ? data.current.temperature_2m : data.current.temperature_2m.toString() }
       } catch {
            const temp = this.isBrokenValue() ? Math.round(Math.random() * 30) :  Math.round(Math.random() * 30).toString()
            return { temp: temp }
       }
    }
    
    public getWeatherFromServiceB = async (lat: number, long: number): Promise<unknown> => {
        try {
            await new Promise(resolve => setTimeout(resolve, 300))
            const data = await this.getWeatherData(lat, long)
            return {
                temp: data.current.temperature_2m,
                elevation: data.elevation,
                latitude: data.latitude,
                longitude: data.longitude,
            }
        } catch {
            return {
                temp: Math.round(Math.random() * 30),
                elevation: Math.round(Math.random() * 100),
                latitude: lat,
                longitude: long,
            }
        }
    }
}