import Chart from 'react-apexcharts'
function PolarBasic({ options, series}) {
  return (
    <Chart
      options={options}
      series={series}
      type="polarArea"
      width={240}
    />
  )
}

export default PolarBasic;