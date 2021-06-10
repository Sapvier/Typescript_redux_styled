import React, { Dispatch, useEffect } from "react";
import { PageContainer } from "../styled";
import { Bubble } from "react-chartjs-2";
import { fetchAsteroidsData } from "../../api";
import { ChartWrapper, Title } from "./styled";
import { saveAsteroidsData } from "../../store/asteroids/actions";
import { connect, ConnectedProps } from "react-redux";
import { AsteroidObject } from "../../api/types";
import { IAppState } from "../../store/asteroids/reducer";
import { Action } from "redux";

type HeaderProps = ConnectedProps<typeof connector>;

const AsteroidsPage = ({ data, saveData }: HeaderProps) => {
  const date = new Date();
  const requestDate =
    date.getFullYear() + "-" + date.getDate() + "-" + (date.getMonth() + 1);
  const options = {
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: false,
      },
    },
    scales: {
      xAxes: {
        grid: {
          color: "rgba(0,0,0, 0.05)",
        },
        title: {
          display: true,
          text: `Asteroids going past Earth, ` + requestDate,
          color: "black",
        },
      },
      yAxes: {
        grid: {
          color: "rgba(0,0,0, 0.05)",
        },
        title: {
          display: true,
          text: "Distance from Earth in astronomical units ",
          color: "black",
        },
      },
    },
  };

  useEffect(() => {
    fetchAsteroidsData(requestDate).then((r) => saveData(r));
  }, []);

  return (
    <PageContainer>
      <Title>Asteroids</Title>
      <ChartWrapper>
        <Bubble
          data={data}
          type="linear"
          width={770}
          height={550}
          options={options}
        />
      </ChartWrapper>
    </PageContainer>
  );
};
const mapStateToProps = (state: IAppState) => ({
  data: state.asteroidsReducer,
});

const mapDispatchToProps = (dispatch: Dispatch<Action>) => ({
  saveData: (obj: AsteroidObject) => dispatch(saveAsteroidsData(obj)),
});

const connector = connect(mapStateToProps, mapDispatchToProps);

export default connector(AsteroidsPage);
