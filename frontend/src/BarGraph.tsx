import React from 'react';
import { Chart } from 'primereact/chart';
import { useChartData } from './ChartDataContext';

const BarGraph: React.FC = () => {
  const { serverData } = useChartData();

  const getLightTheme = () => {
    return {
      basicOptions: {
        maintainAspectRatio: false,
        aspectRatio: 0.8,
        plugins: {
          legend: {
            labels: {
              color: '#495057',
            },
          },
        },
        scales: {
          x: {
            ticks: {
              color: '#495057',
            },
            grid: {
              color: '#ebedef',
            },
          },
          y: {
            ticks: {
              color: '#495057',
            },
            grid: {
              color: '#ebedef',
            },
          },
        },
      },
    };
  };

  const { basicOptions } = getLightTheme();
  const labels = serverData.map(server => server.server_name);

  return (
    <div>
      <div className="card">
          <Chart
            type="bar"
            data={{
              labels: labels, 
              datasets: [
                {
                  label: 'Primary Data',
                  backgroundColor: '#42A5F5',
                  data: serverData.map(data => data.primary_data_count),
                },
                {
                  label: 'Replicated Data',
                  backgroundColor: '#FFA726',
                  data: serverData.map(data => data.secondary_data_count),
                },
              ],
            }}
            options={basicOptions}
          />
      </div>
    </div>
  );
};

export default BarGraph;
