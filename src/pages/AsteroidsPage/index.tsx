import React, { Dispatch, useEffect } from "react";
import { connect, ConnectedProps } from "react-redux";
import { Action } from "redux";
import { Bubble } from "react-chartjs-2";

import { fetchAsteroidsData } from "../../api";
import { saveAsteroidsData } from "../../store/asteroids/actions";

import { AsteroidObject } from "../../api/types";
import { IAppState } from "../../store/storeTypes";
import { options, requestDate } from "./chartData";

import { PageContainer } from "../../styles/styled";
import { ChartWrapper, Title } from "./styled";

type HeaderProps = ConnectedProps<typeof connector>;

const AsteroidsPage = ({ data, saveData }: HeaderProps) => {
  const getAsteroidsData = () => {
    fetchAsteroidsData(requestDate).then((r) => saveData(r));
  };

  useEffect(() => {
    getAsteroidsData();
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
