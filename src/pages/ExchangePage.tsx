import React, { Component } from "react";
import { DefaultLayout } from "../layouts/DefaultLayout";
import { PXContents } from "../components/PXContents";
import { PXTitle } from "../components/PXTitle";

export class ExchangePage extends Component {
  render() {
    return (
      <div id="app">
        {/* <Spinner /> */}
        <DefaultLayout page="홈 페이지">
          <PXContents className="favGames">
            <PXTitle>추천게임</PXTitle>
            <button className="iconBtn btn_more_text">게임 전체보기</button>
            <div className="listWrap _card">
              {/* <ul className="card-list">
                <li v-for="(application, index) in applications" :key="'app'+index" class="cardItem">
                  <ApplicationCard :application="application"/>
                </li>
              </ul> */}
            </div>
            <div className="header2">dwqdqw</div>
            <div className="header3">dwqdqw</div>
            <div className="header4">dwqdqw</div>
          </PXContents>
        </DefaultLayout>
      </div>
    );
  }
}
