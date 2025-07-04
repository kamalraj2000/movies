'use client';

import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { useWeatherForecastGetWeatherForecastQuery } from "@/store/api/generated/weather";

export default function Home() {
  const { data, isFetching } = useWeatherForecastGetWeatherForecastQuery();

  return (
    <main className="flex min-h-screen flex-col items-center p-24">
      {isFetching ?
        <p><em>Loading...</em></p> :
        <>
          <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl pb-8">
            Weather Forecast
          </h1>
          <Table>
            <TableCaption>Backend API Demonstration</TableCaption>
            <TableHeader>
              <TableRow>
                <TableHead >Date</TableHead>
                <TableHead>Temp. (C)</TableHead>
                <TableHead>Temp. (F)</TableHead>
                <TableHead className="text-right">Summary</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {data?.map((forecast) => (
                <TableRow key={forecast.date}>
                  <TableCell className="font-medium">{forecast.date}</TableCell>
                  <TableCell>{forecast.temperatureC}</TableCell>
                  <TableCell>{forecast.temperatureF}</TableCell>
                  <TableCell className="text-right">{forecast.summary}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </>
      }
    </main>
  );
}