import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Legend,
  ResponsiveContainer,
} from 'recharts'
import './index.css'

const VaccinationCoverage = props => {
  const {last7DaysVaccination} = props
  const dataArray = last7DaysVaccination.map(eachObject => ({
    vaccinationDate: eachObject.vaccine_date,
    dose1: eachObject.dose_1,
    dose2: eachObject.dose_2,
  }))
  const DataFormatter = number => {
    if (number > 1000) {
      console.log(`${(number / 1000).toString()}k`)
      return `${(number / 1000).toString()}k`
    }
    return number.toString()
  }

  return (
    <div className="vaccination-coverage-container">
      <h1 className="vaccination-coverage-title">Vaccination Coverage</h1>
      <ResponsiveContainer width="100%" height={400}>
        <BarChart data={dataArray} width={1000} height={300}>
          <XAxis
            dataKey="vaccinationDate"
            tick={{
              stroke: 'gray',
              strokeWidth: 1,
            }}
          />
          <YAxis
            tickFormatter={DataFormatter}
            tick={{stroke: 'gray', strokeWidth: 0}}
          />
          <Legend
            wrapperStyle={{
              padding: 20,
            }}
          />
          <Bar dataKey="dose1" name="Dose 1" fill="#f54394" barSize="10%" />
          <Bar dataKey="dose2" name="Dose 2" fill="#5a8dee" barSize="10%" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  )
}

export default VaccinationCoverage
