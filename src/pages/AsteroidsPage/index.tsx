import React, { Dispatch, useEffect } from "react";
import { PageContainer } from "../styled";
import { Bubble } from "react-chartjs-2";
import { fetchAsteroidsData } from "../../api";
import { ChartWrapper } from "./styled";
import { saveAsteroidsData } from "../../store/asteroids/actions";
import { connect, ConnectedProps, useDispatch } from "react-redux";
import { AppDispatch } from "../../store/store";
import { AsteroidObject } from "../../api/types";
import { State } from "../../store/rootReducer";

type HeaderProps = ConnectedProps<typeof connector>;

const AsteroidsPage = ({ data, saveData }: HeaderProps) => {
  const date = new Date();
  const dispatch: AppDispatch = useDispatch();
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
      xAxes: { grid: { color: "rgba(0,0,0, 0.05)" } },
      yAxes: { grid: { color: "rgba(0,0,0, 0.05)" } },
    },
  };

  useEffect(() => {
    fetchAsteroidsData(requestDate).then((r) => dispatch(saveAsteroidsData(r)));
  }, []);

  return (
    <PageContainer>
      <h1>Asteroids</h1>
      <ChartWrapper>
        <Bubble
          data={data}
          type="linear"
          width={800}
          height={650}
          options={options}
        />
      </ChartWrapper>
    </PageContainer>
  );
};

const mapStateToProps = (state: State) => ({
  data: state.asteroidsReducer,
});

const mapDispatchToProps = (dispatch: Dispatch<any>) => ({
  saveData: (obj: AsteroidObject) => dispatch(saveAsteroidsData(obj)),
});

const connector = connect(mapStateToProps, mapDispatchToProps);

export default connector(AsteroidsPage);
