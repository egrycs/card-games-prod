(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<router-outlet></router-outlet>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/games/hearts/hearts.component.html":
/*!******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/games/hearts/hearts.component.html ***!
  \******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<mat-tab-group class=\"hearts-container\">\r\n  <mat-tab [label]=\"'PLAY' | translate\">\r\n    <div class=\"hearts-container__play-ground\">\r\n      <mat-card class=\"card-table-panel\">\r\n        <div class=\"flex-center\">\r\n          <div class=\"flex-center col-gap-6\">\r\n            <p\r\n              [class]=\"players.length ? 'text-white' : 'text-table-green'\"\r\n              class=\"col-gap-1 text-semibold font-size-20\"\r\n            >{{ players.length ? players[1].getName() : '-' }}</p>\r\n            <img class=\"card-size\" [src]=\"cardUrls[1]\"/>\r\n          </div>\r\n          <div class=\"flex-col-space-between col-gap-6\">\r\n            <div class=\"flex-col-center\">\r\n              <p\r\n                [class]=\"players.length ? 'text-white' : 'text-table-green'\"\r\n                class=\"flex-col-center card-size no-margin row-gap-1 text-semibold font-size-20\"\r\n              >{{ players.length ? players[2].getName() : '-' }}</p>\r\n              <img class=\"flex-col-center card-size\" [src]=\"cardUrls[2]\"/>\r\n            </div>\r\n            <div class=\"swap-direction-icon-wrapper\">\r\n              <img *ngIf=\"!endOf3CardsSelection\" class=\"swap-direction-icon\" [src]=\"swapDirectionImgUrl\"/>\r\n            </div>\r\n            <div class=\"flex-col-center my-card\">\r\n              <img class=\"card-size row-gap-1\" [src]=\"myCardUrl\"/>\r\n              <p\r\n                [class]=\"myTable ? 'text-white' : 'text-table-green'\"\r\n                class=\"flex-col-center card-size no-margin text-center text-semibold font-size-20\"\r\n              >{{ myTable ? myTable.getPlayer(0).getName() : '-'}}</p>\r\n            </div>\r\n          </div>\r\n          <div class=\"flex-center\">\r\n            <img class=\"card-size col-gap-1\" [src]=\"cardUrls[3]\"/>\r\n            <p\r\n              [class]=\"players.length ? 'text-white' : 'text-table-green'\"\r\n              class=\"text-semibold font-size-20\"\r\n            >{{ players.length ? players[3].getName() : '-' }}</p>\r\n            \r\n          </div>\r\n        </div>\r\n      </mat-card>\r\n      <mat-card class=\"my-cards-panel\">\r\n        <div class=\"flex-col-center\">\r\n          <p class=\"flex-center text-center text-semibold font-size-20\">\r\n            {{ 'MY_CARDS_PANEL.YOUR_CARDS' | translate }} ({{ myTable ? myTable.getPlayer(0).getName() : '-'}})\r\n          </p>\r\n          <div\r\n            [ngClass]=\"{'my-cards-panel_my-cards': myTable.getPlayer(0).hasCard()}\"\r\n            class=\"flex-center-end row-gap-2\"\r\n          >\r\n            <img *ngIf=\"!myTable?.getPlayer(0).hasCard()\" class=\"my-cards-panel_placeholder card-size\" [src]=\"placeholderCardImgUrl\"/>\r\n            <div *ngFor=\"let card of myTable?.getPlayer(0).getCards(); let idx=index\">\r\n              <div class=\"my-cards-panel_card-wrapper\">\r\n                <img\r\n                  [id]=\"'my-card-' + card.printCard()\"\r\n                  [ngClass]=\"{'my-card-in-hand': !endOf3CardsSelection}\"\r\n                  class=\"card-size\"\r\n                  [src]=\"convertCardToImgUrl(card)\"\r\n                  (click)=\"selectedCard(card)\"\r\n                />\r\n              </div>\r\n            </div>\r\n          </div>\r\n          <div class=\"my-cards-panel_info\">\r\n            <p\r\n              [class]=\"allMessage.type === 'error' ? 'color-warn' : 'color-primary'\"\r\n              class=\"flex-center no-margin text-center font-size-20\"\r\n              [innerHTML]=\"allMessage.msg | translate: allMessage.translateParams\"\r\n            ></p>\r\n            <p\r\n              [class]=\"allMessage.type === 'error' ? 'color-warn' : 'color-primary'\"\r\n              class=\"flex-center no-margin text-center font-size-14\"\r\n              [innerHTML]=\"allMessage.subMsg | translate: allMessage.translateParams\"\r\n            ></p>\r\n          </div>\r\n        </div>\r\n      </mat-card>\r\n      <mat-card class=\"control-panel\">\r\n        <div class=\"flex\">\r\n          <div class=\"control-panel_first-half flex-space-between\">\r\n            <div>\r\n              <button\r\n                mat-raised-button\r\n                color=\"primary\"\r\n                [disabled]=\"endOfGame || endOfRound || endOf3CardsSelection || selectedCardsToSwap.length !== 3\"\r\n                (click)=\"swapCards()\"\r\n              >{{ 'CONTROL_PANEL.SUBMIT_3_CARDS_SELECTION' | translate }}</button>\r\n            </div>\r\n            <button\r\n              mat-raised-button\r\n              color=\"primary\"\r\n              (click)=\"confirmStand()\"\r\n              [disabled]=\"endOfGame || endOfRound || !endOf3CardsSelection || !endOfSelection\"\r\n            >{{ 'CONTROL_PANEL.CONFIRM_STAND' | translate }}</button>\r\n            <button\r\n              mat-raised-button\r\n              color=\"primary\"\r\n              (click)=\"newRound()\"\r\n              [disabled]=\"endOfGame || !endOfRound\"\r\n            >{{ 'CONTROL_PANEL.NEXT_ROUND' | translate }}</button>\r\n          </div>\r\n          <div class=\"control-panel_second-half flex-end\">\r\n            <button\r\n                mat-raised-button\r\n                color=\"primary\"\r\n                (click)=\"newGame()\"\r\n                [disabled]=\"!endOfGame\"\r\n              >{{ 'CONTROL_PANEL.NEW_GAME' | translate }}</button>\r\n          </div>\r\n        </div>\r\n      </mat-card>\r\n      <mat-card class=\"score-board flex-center\">\r\n        <div class=\"score-board-header flex-center\">\r\n          <div class=\"flex-center text-bold\">{{ 'CONTROL_PANEL.NAME' | translate }}</div>\r\n          <div class=\"flex-center text-bold\">{{ 'CONTROL_PANEL.REALIZED' | translate }}</div>\r\n          <div class=\"flex-center text-bold\">{{ 'CONTROL_PANEL.SCORE' | translate }}</div>\r\n        </div>\r\n        <div class=\"score-board-row flex-center\" *ngFor=\"let player of myTable?.getPlayers()\">\r\n          <div class=\"flex-center text-semibold\">{{ player.getName() }}</div>\r\n          <div class=\"flex-center text-semibold text-center\">{{ player.getReal() }}</div>\r\n          <div class=\"flex-center text-semibold text-right\">{{ player.getScore() }}</div>\r\n        </div>\r\n      </mat-card>\r\n    </div>\r\n  </mat-tab>\r\n  <mat-tab [label]=\"'HISTORY' | translate\">\r\n    <mat-card class=\"hearts-container__history history-score-board flex-center\">\r\n      <div class=\"history-score-board-header flex-center\">\r\n        <div class=\"history-score-board-col flex-center text-center text-bold\">{{ 'HISTORY_PANEL.TURN_PER_ROUND' | translate }}</div>\r\n        <div class=\"history-score-board-col flex-center text-center text-bold\">{{ 'HISTORY_PANEL.TURN_STARTER' | translate }}</div>\r\n        <div class=\"history-score-board-col history-score-board-header-name flex-center text-bold\" *ngFor=\"let player of myTable?.getPlayers()\">{{ player.getName() }}</div>\r\n        <div class=\"history-score-board-col flex-center text-center text-bold\">{{ 'HISTORY_PANEL.TURN_TAKER' | translate }}</div>\r\n      </div>\r\n      <div class=\"flex-col-center\" *ngFor=\"let record of history\">\r\n        <div *ngIf=\"record.isCardRow\" class=\"history-score-board-row flex-center\">\r\n          <div class=\"history-score-board-col flex-center text-semibold\">{{ record.cardRow.turnPerRound }}</div>\r\n          <div class=\"history-score-board-col history-score-board-col-height flex-center text-semibold\">{{ record.cardRow.trunStarter }}</div>\r\n          <div class=\"history-score-board-col flex-center text-bold\" *ngFor=\"let cardUrl of record.cardRow.cardUrls\">\r\n            <img class=\"flex-center history-card-size\" [src]=\"cardUrl\"/>\r\n          </div>\r\n          <div class=\"history-score-board-col history-score-board-col-height flex-center text-semibold\">{{ record.cardRow.turnTaker }}</div>\r\n        </div>\r\n        <div *ngIf=\"!record.isCardRow\" class=\"history-score-board-row flex-center\">\r\n          <div class=\"history-score-board-col history-score-board-col-height flex-col-center text-semibold\">\r\n            <div class=\"flex-center text-bold\">{{ 'HISTORY_PANEL.REAL' | translate }}</div>\r\n            <div class=\"flex-center text-bold\">{{ 'HISTORY_PANEL.SCORE' | translate }}</div>\r\n          </div>\r\n          <div class=\"history-score-board-col history-score-board-col-height flex-center\">\r\n          </div>\r\n          <div class=\"history-score-board-col history-score-board-col-height flex-col-center text-semibold\" *ngFor=\"let player of record.scoreRow.players\">\r\n            <div class=\"flex-center\">{{ player.getReal() }}</div>\r\n            <div class=\"flex-center\">{{ player.getScore() }}</div>\r\n          </div>\r\n          <div class=\"history-score-board-col history-score-board-col-height flex-col-center\"></div>\r\n        </div>\r\n      </div>\r\n    </mat-card>\r\n  </mat-tab>\r\n</mat-tab-group>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/games/rikiki/rikiki.component.html":
/*!******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/games/rikiki/rikiki.component.html ***!
  \******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<mat-tab-group class=\"rikiki-container\">\r\n  <mat-tab [label]=\"'SETTINGS' | translate\">\r\n    <mat-card class=\"rikiki-container__settings-panel\">\r\n      <div class=\"flex-col-start\">\r\n        <div class=\"rikiki-container__settings-panel_row flex-space-between\">\r\n          <div>\r\n            <button\r\n              mat-raised-button\r\n              color=\"primary\"\r\n              routerLink=\"/home\"\r\n              [disabled]=\"!endOfGame\"\r\n            >{{ 'SETTINGS_PANEL.GO_HOME' | translate }}</button>\r\n          </div>\r\n          <div class=\"col-gap-1\">\r\n            <button\r\n              mat-raised-button\r\n              color=\"primary\"\r\n              (click)=\"leaveGame()\"\r\n              [disabled]=\"endOfGame\"\r\n            >{{ 'SETTINGS_PANEL.LEAVE_CURRENT_GAME' | translate }}</button>\r\n          </div>\r\n        </div>\r\n        <div class=\"rikiki-container__settings-panel_row flex-space-between\">\r\n          <div class=\"text-semibold font-size-24\">{{ 'SETTINGS_PANEL.NR_OF_PLAYERS' | translate }}:</div>\r\n          <div class=\"flex-end\">\r\n            <mat-slider\r\n              class=\"col-gap-2\"\r\n              color=\"primary\"\r\n              [step]=\"1\"\r\n              [tickInterval]=\"1\"\r\n              [thumbLabel]=\"true\"\r\n              [vertical]=\"false\"\r\n              [invert]=\"false\"\r\n              [min]=\"3\"\r\n              [max]=\"nrOfPlayersMax\"\r\n              [disabled]=\"!endOfGame\"\r\n              [(ngModel)]=\"nrOfPlayersTemp\"\r\n            ></mat-slider>\r\n            <div class=\"col-gap-1\">\r\n              <button\r\n                mat-raised-button\r\n                color=\"primary\"\r\n                (click)=\"setNrOfPlayers()\"\r\n                [disabled]=\"!endOfGame\"\r\n              >{{ 'SETTINGS_PANEL.SET' | translate }}</button>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <div class=\"rikiki-container__settings-panel_row flex-space-between\">\r\n          <div class=\"text-semibold font-size-24\">{{ 'SETTINGS_PANEL.NR_OF_ROUNDS' | translate }}:</div>\r\n          <div class=\"flex-end\">\r\n            <mat-slider\r\n              class=\"col-gap-2\"\r\n              color=\"primary\"\r\n              [step]=\"1\"\r\n              [tickInterval]=\"1\"\r\n              [thumbLabel]=\"true\"\r\n              [vertical]=\"false\"\r\n              [invert]=\"false\"\r\n              [min]=\"3\"\r\n              [max]=\"nrOfRoundsMax\"\r\n              [disabled]=\"!endOfGame\"\r\n              [(ngModel)]=\"nrOfRoundsTemp\"\r\n            ></mat-slider>\r\n            <div class=\"col-gap-1\">\r\n              <button\r\n                mat-raised-button\r\n                color=\"primary\"\r\n                (click)=\"setNrOfRounds()\"\r\n                [disabled]=\"!endOfGame\"\r\n              >{{ 'SETTINGS_PANEL.SET' | translate }}</button>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <div class=\"rikiki-container__settings-panel_row flex-space-between\">\r\n          <div class=\"text-semibold font-size-24\">{{ 'SETTINGS_PANEL.START_PLAYER' | translate }}:</div>\r\n          <div class=\"flex-end\">\r\n            <mat-slider\r\n              class=\"col-gap-2\"\r\n              color=\"primary\"\r\n              [step]=\"1\"\r\n              [tickInterval]=\"1\"\r\n              [thumbLabel]=\"true\"\r\n              [vertical]=\"false\"\r\n              [invert]=\"false\"\r\n              [min]=\"1\"\r\n              [max]=\"nrOfPlayersMax\"\r\n              [disabled]=\"!endOfGame\"\r\n              [(ngModel)]=\"starterIdxTemp\"\r\n            ></mat-slider>\r\n            <div class=\"col-gap-1\">\r\n              <button\r\n                mat-raised-button\r\n                color=\"primary\"\r\n                (click)=\"setStarter()\"\r\n                [disabled]=\"!endOfGame\"\r\n              >{{ 'SETTINGS_PANEL.SET' | translate }}</button>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </mat-card>\r\n  </mat-tab>\r\n  <mat-tab [label]=\"'PLAY' | translate\">\r\n    <div class=\"rikiki-container__play-ground\">\r\n      <mat-card class=\"card-table-panel flex\">\r\n        <div class=\"flex\">\r\n          <div class=\"card-table-panel_first-half flex-col-center\">\r\n            <p class=\"flex-col-center card-size no-margin text-center text-bold text-white font-size-16\">{{ 'CARD_TABLE_PANEL.TRUMP_CARD' | translate }}</p>\r\n            <img class=\"card-size\" [src]=\"trumpCardUrl\"/>\r\n          </div>\r\n          <div class=\"card-table-panel_second-half flex-center\">\r\n            <div class=\"flex-col-center\">\r\n              <div class=\"card-table-other-players flex-center row-gap-2\">\r\n                <div *ngFor=\"let cardUrl of cardUrls; let idx=index\">\r\n                  <p\r\n                    [class]=\"players.length ? 'text-white' : 'text-table-green'\"\r\n                    class=\"flex-col-center card-size no-margin col-gap-6 text-semibold font-size-20\"\r\n                  >{{ players.length ? players[idx].getName() : '-' }}</p>\r\n                  <img class=\"flex-col-center card-size col-gap-6\" [src]=\"cardUrl\"/>\r\n                  <p\r\n                    [class]=\"players.length && idx === dealerIdx ? 'text-white' : 'text-table-green'\"\r\n                    class=\"flex-col-center card-size no-margin text-bold\"\r\n                  >\r\n                    {{ idx === dealerIdx ? 'Dealer' : '-' }}\r\n                  </p>\r\n                </div>\r\n              </div>\r\n              <div class=\"trump-and-my-selected-card row-gap-2\">\r\n                <div class=\"flex-col-center-top my-card\">\r\n                  <img class=\"card-size\" [src]=\"myCardUrl\"/>\r\n                  <p\r\n                    [class]=\"myTable ? 'text-white' : 'text-table-green'\"\r\n                    class=\"flex-col-center card-size no-margin text-center text-semibold font-size-20\"\r\n                  >{{ myTable ? myTable.getPlayer(0).getName() : '-'}}</p>\r\n                  <p\r\n                    [class]=\"dealerIdx === 0 ? 'text-white' : 'text-table-green'\"\r\n                    class=\"flex-col-center card-size no-margin text-bold\"\r\n                  >\r\n                    {{ dealerIdx === 0 ? 'Dealer' : '-' }}\r\n                  </p>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </mat-card>\r\n      <mat-card class=\"my-cards-panel\">\r\n        <div class=\"flex\">\r\n          <div class=\"my-cards-panel__first-half flex-col-center\">\r\n            <p class=\"flex-col-center card-size no-margin text-center text-bold text-white font-size-16\">{{ 'MY_CARDS_PANEL.ROUND' | translate }}</p>\r\n            <p class=\"no-margin text-bold color-primary font-size-64\">{{ relativeRound }}</p>\r\n          </div>\r\n          <div class=\"my-cards-panel__second-half flex-col-center\">\r\n            <p class=\"flex-center text-center text-semibold font-size-20\">{{ 'MY_CARDS_PANEL.YOUR_CARDS' | translate }} ({{ myTable ? myTable.getPlayer(0).getName() : '-'}})</p>\r\n            <div class=\"my-cards-panel__second-half_my-cards flex-center row-gap-2\">\r\n              <img *ngIf=\"!myTable || !myTable.getPlayer(0).hasCard()\" class=\"card-size\" [src]=\"placeholderCardImgUrl\"/>\r\n              <div *ngFor=\"let card of myTable?.getPlayer(0).getCards(); let idx=index\">\r\n                <img\r\n                  [ngClass]=\"{'margin-left-1': idx === 0, 'my-card-in-hand': !endOfSelection}\"\r\n                  class=\"card-size col-gap-2\"\r\n                  [src]=\"round === 1 ? cardBackImgUrl : convertCardToImgUrl(card)\"\r\n                  (click)=\"selectedCard(idx)\"\r\n                />\r\n              </div>\r\n            </div>\r\n            <div class=\"my-cards-panel__second-half_info\">\r\n              <p\r\n                [class]=\"allMessage.type === 'error' ? 'color-warn' : 'color-primary'\"\r\n                class=\"flex-center no-margin text-center font-size-20\"\r\n                [translate]=\"allMessage.msg\"\r\n                [translateParams]=\"allMessage.translateParams\"\r\n              ></p>\r\n              <p\r\n                [class]=\"allMessage.type === 'error' ? 'color-warn' : 'color-primary'\"\r\n                class=\"flex-center no-margin text-center font-size-14\"\r\n                [translate]=\"allMessage.subMsg\"\r\n                [translateParams]=\"allMessage.translateParams\"\r\n              ></p>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </mat-card>\r\n      <mat-card class=\"control-panel\">\r\n        <div class=\"flex\">\r\n          <div class=\"control-panel_first-half flex-space-between\">\r\n            <div >\r\n              <mat-slider\r\n                class=\"col-gap-2\"\r\n                color=\"primary\"\r\n                [step]=\"1\"\r\n                [tickInterval]=\"1\"\r\n                [thumbLabel]=\"true\"\r\n                [vertical]=\"false\"\r\n                [invert]=\"false\"\r\n                [min]=\"playerBetMin\"\r\n                [max]=\"playerBetMax\"\r\n                [disabled]=\"endOfGame || endOfRound || endOfBet\"\r\n                [(ngModel)]=\"playerBet\"\r\n              ></mat-slider>\r\n              <button\r\n                mat-raised-button\r\n                color=\"primary\"\r\n                [disabled]=\"endOfGame || endOfRound || endOfBet\"\r\n                (click)=\"bet()\"\r\n              >{{ 'CONTROL_PANEL.SUBMIT_BET' | translate }}</button>\r\n            </div>\r\n            <button\r\n              mat-raised-button\r\n              color=\"primary\"\r\n              (click)=\"confirmStand()\"\r\n              [disabled]=\"endOfGame || endOfRound || !endOfBet || !endOfSelection\"\r\n            >{{ 'CONTROL_PANEL.CONFIRM_STAND' | translate }}</button>\r\n            <button\r\n              mat-raised-button\r\n              color=\"primary\"\r\n              (click)=\"newRound()\"\r\n              [disabled]=\"endOfGame || !endOfRound\"\r\n            >{{ 'CONTROL_PANEL.NEXT_ROUND' | translate }}</button>\r\n          </div>\r\n          <div class=\"control-panel_second-half flex-end\">\r\n            <button\r\n                mat-raised-button\r\n                color=\"primary\"\r\n                (click)=\"newGame()\"\r\n                [disabled]=\"!endOfGame\"\r\n              >{{ 'CONTROL_PANEL.NEW_GAME' | translate }}</button>\r\n          </div>\r\n        </div>\r\n      </mat-card>\r\n      <mat-card class=\"score-board flex-center\">\r\n        <div class=\"score-board-header flex-center\">\r\n          <div class=\"flex-center text-bold\">{{ 'CONTROL_PANEL.NAME' | translate }}</div>\r\n          <div class=\"flex-center text-bold\">{{ 'CONTROL_PANEL.ACTUAL_BET' | translate }}</div>\r\n          <div class=\"flex-center text-bold\">{{ 'CONTROL_PANEL.REALIZED' | translate }}</div>\r\n          <div class=\"flex-center text-bold\">{{ 'CONTROL_PANEL.SCORE' | translate }}</div>\r\n        </div>\r\n        <div class=\"score-board-row flex-center\" *ngFor=\"let player of myTable?.getPlayers()\">\r\n          <div class=\"flex-center text-semibold\">{{ player.getName() }}</div>\r\n          <div class=\"flex-center text-semibold text-center\">{{ player.getBet() === -1 ? '-' : player.getBet() }}</div>\r\n          <div class=\"flex-center text-semibold text-center\">{{ player.getReal() }}</div>\r\n          <div class=\"flex-center text-semibold text-right\">{{ player.getScore() }}</div>\r\n        </div>\r\n      </mat-card>\r\n    </div>\r\n  </mat-tab>\r\n  <mat-tab [label]=\"'HISTORY' | translate\">\r\n    <mat-card class=\"rikiki-container__history history-score-board flex-center\">\r\n      <div class=\"history-score-board-header flex-center\">\r\n        <div class=\"history-score-board-col flex-center text-center text-bold\">{{ 'HISTORY_PANEL.TURN_PER_ROUND' | translate }}</div>\r\n        <div class=\"history-score-board-col flex-center text-center text-bold\">{{ 'HISTORY_PANEL.TURN_STARTER' | translate }}</div>\r\n        <div class=\"history-score-board-col history-score-board-header-name flex-center text-bold\" *ngFor=\"let player of myTable?.getPlayers()\">{{ player.getName() }}</div>\r\n        <div class=\"history-score-board-col flex-center text-center text-bold\">{{ 'HISTORY_PANEL.TURN_TAKER' | translate }}</div>\r\n      </div>\r\n      <div class=\"flex-col-center\" *ngFor=\"let record of history\">\r\n        <div *ngIf=\"record.isCardRow\" class=\"history-score-board-row flex-center\">\r\n          <div class=\"history-score-board-col flex-center text-semibold\">{{ record.cardRow.turnPerRound }}</div>\r\n          <div class=\"history-score-board-col history-score-board-col-height flex-center text-semibold\">{{ record.cardRow.trunStarter }}</div>\r\n          <div class=\"history-score-board-col flex-center text-bold\" *ngFor=\"let cardUrl of record.cardRow.cardUrls\">\r\n            <img class=\"flex-center history-card-size\" [src]=\"cardUrl\"/>\r\n          </div>\r\n          <div class=\"history-score-board-col history-score-board-col-height flex-center text-semibold\">{{ record.cardRow.turnTaker }}</div>\r\n        </div>\r\n        <div *ngIf=\"!record.isCardRow\" class=\"history-score-board-row flex-center\">\r\n          <div class=\"history-score-board-col history-score-board-col-height flex-col-center text-semibold\">\r\n            <div class=\"flex-center text-bold\">{{ 'HISTORY_PANEL.BET' | translate }}</div>\r\n            <div class=\"flex-center text-bold\">{{ 'HISTORY_PANEL.REAL' | translate }}</div>\r\n            <div class=\"flex-center text-bold\">{{ 'HISTORY_PANEL.SCORE' | translate }}</div>\r\n          </div>\r\n          <div class=\"history-score-board-col history-score-board-col-height flex-center\">\r\n            <img class=\"flex-center history-card-size\" [src]=\"record.scoreRow.trumpCardUrl\"/>\r\n          </div>\r\n          <div class=\"history-score-board-col history-score-board-col-height flex-col-center text-semibold\" *ngFor=\"let player of record.scoreRow.players\">\r\n            <div class=\"flex-center\">{{ player.getBet() }}</div>\r\n            <div class=\"flex-center\">{{ player.getReal() }}</div>\r\n            <div class=\"flex-center\">{{ player.getScore() }}</div>\r\n          </div>\r\n          <div class=\"history-score-board-col history-score-board-col-height flex-col-center\"></div>\r\n        </div>\r\n      </div>\r\n    </mat-card>\r\n  </mat-tab>\r\n</mat-tab-group>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.component.html":
/*!********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.component.html ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"home-container\">\r\n  <mat-card class=\"home-container__settings-panel\">\r\n    <div class=\"flex-col-start\">\r\n      <div class=\"home-container__settings-panel_row flex-space-between row-gap-2\">\r\n        <div class=\"text-semibold font-size-24\">{{ 'SETTINGS_PANEL.SELECT_LANGUAGE' | translate }}:</div>\r\n        <div class=\"flex-end\">\r\n          <div class=\"col-gap-2 text-bold font-size-16\">{{ 'SETTINGS_PANEL.LANG_HU' | translate }}</div>\r\n          <mat-slide-toggle\r\n            class=\"col-gap-2\"\r\n            color=\"primary\"\r\n            [checked]=\"currLang === 'en'\"\r\n            (change)=\"langChange($event.checked ? 'en' : 'hu')\"\r\n          ></mat-slide-toggle>\r\n          <div class=\"col-gap-2 text-bold font-size-16\">{{ 'SETTINGS_PANEL.LANG_EN' | translate }}</div>\r\n        </div>\r\n      </div>\r\n      <div class=\"home-container__settings-panel_row flex-space-between row-gap-2\">\r\n        <div class=\"text-semibold font-size-24\">{{ 'SETTINGS_PANEL.ENTER_YOUR_NAME' | translate }}:</div>\r\n        <div class=\"flex-end\">\r\n          <input\r\n            class=\"player-name col-gap-3\"\r\n            type=\"text\"\r\n            maxlength=\"5\"\r\n            [(ngModel)]=\"playerNameTemp\"\r\n          >\r\n          <div class=\"col-gap-1\">\r\n            <button\r\n              class=\"font-size-16\"\r\n              mat-raised-button\r\n              color=\"primary\"\r\n              (click)=\"setPlayerName()\"\r\n            >{{ 'SETTINGS_PANEL.SET' | translate }}</button>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div class=\"home-container__settings-panel_row flex-space-between\">\r\n        <div class=\"text-semibold font-size-24\">{{ 'SETTINGS_PANEL.SELECT_GAME' | translate }}:</div>\r\n        <div class=\"flex-end\">\r\n          <div class=\"col-gap-2\">\r\n            <button\r\n              class=\"font-size-16\"\r\n              mat-raised-button\r\n              color=\"primary\"\r\n              (click)=\"goToRikiki()\"\r\n            >{{ 'RIKIKI' | translate }}</button>\r\n          </div>\r\n          <div class=\"col-gap-1\">\r\n            <button\r\n              class=\"font-size-16\"\r\n              mat-raised-button\r\n              color=\"primary\"\r\n              (click)=\"goToHearts()\"\r\n            >{{ 'HEARTS' | translate }}</button>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </mat-card>\r\n</div>");

/***/ }),

/***/ "./node_modules/tslib/tslib.es6.js":
/*!*****************************************!*\
  !*** ./node_modules/tslib/tslib.es6.js ***!
  \*****************************************/
/*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __createBinding, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault, __classPrivateFieldGet, __classPrivateFieldSet */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__extends", function() { return __extends; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__assign", function() { return __assign; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__rest", function() { return __rest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__decorate", function() { return __decorate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__param", function() { return __param; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__metadata", function() { return __metadata; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__awaiter", function() { return __awaiter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__generator", function() { return __generator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__createBinding", function() { return __createBinding; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__exportStar", function() { return __exportStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__values", function() { return __values; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__read", function() { return __read; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spread", function() { return __spread; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spreadArrays", function() { return __spreadArrays; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__await", function() { return __await; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function() { return __asyncGenerator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function() { return __asyncDelegator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncValues", function() { return __asyncValues; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function() { return __makeTemplateObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importStar", function() { return __importStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importDefault", function() { return __importDefault; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__classPrivateFieldGet", function() { return __classPrivateFieldGet; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__classPrivateFieldSet", function() { return __classPrivateFieldSet; });
/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    }
    return __assign.apply(this, arguments);
}

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

function __decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}

function __param(paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
}

function __metadata(metadataKey, metadataValue) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}

function __awaiter(thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
}

function __createBinding(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}

function __exportStar(m, exports) {
    for (var p in m) if (p !== "default" && !exports.hasOwnProperty(p)) exports[p] = m[p];
}

function __values(o) {
    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number") return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
}

function __read(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
}

function __spread() {
    for (var ar = [], i = 0; i < arguments.length; i++)
        ar = ar.concat(__read(arguments[i]));
    return ar;
}

function __spreadArrays() {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};

function __await(v) {
    return this instanceof __await ? (this.v = v, this) : new __await(v);
}

function __asyncGenerator(thisArg, _arguments, generator) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var g = generator.apply(thisArg, _arguments || []), i, q = [];
    return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
    function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
    function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
    function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
    function fulfill(value) { resume("next", value); }
    function reject(value) { resume("throw", value); }
    function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
}

function __asyncDelegator(o) {
    var i, p;
    return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
    function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
}

function __asyncValues(o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
}

function __makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};

function __importStar(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result.default = mod;
    return result;
}

function __importDefault(mod) {
    return (mod && mod.__esModule) ? mod : { default: mod };
}

function __classPrivateFieldGet(receiver, privateMap) {
    if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to get private field on non-instance");
    }
    return privateMap.get(receiver);
}

function __classPrivateFieldSet(receiver, privateMap, value) {
    if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to set private field on non-instance");
    }
    privateMap.set(receiver, value);
    return value;
}


/***/ }),

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _games_hearts_hearts_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./games/hearts/hearts.component */ "./src/app/games/hearts/hearts.component.ts");
/* harmony import */ var _games_rikiki_rikiki_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./games/rikiki/rikiki.component */ "./src/app/games/rikiki/rikiki.component.ts");






const routes = [
    {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full'
    },
    {
        path: 'home',
        component: _home_home_component__WEBPACK_IMPORTED_MODULE_3__["HomeComponent"],
    },
    {
        path: 'rikiki',
        component: _games_rikiki_rikiki_component__WEBPACK_IMPORTED_MODULE_5__["RikikiComponent"],
    },
    {
        path: 'hearts',
        component: _games_hearts_hearts_component__WEBPACK_IMPORTED_MODULE_4__["HeartsComponent"],
    },
    {
        path: '**',
        redirectTo: 'home',
    },
];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes, {
                onSameUrlNavigation: 'reload',
            }),
        ],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], AppRoutingModule);



/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/__ivy_ngcc__/fesm2015/ngx-translate-core.js");
/* harmony import */ var ngx_webstorage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-webstorage */ "./node_modules/ngx-webstorage/__ivy_ngcc__/fesm2015/ngx-webstorage.js");




let AppComponent = class AppComponent {
    constructor(localStorage, translate) {
        this.localStorage = localStorage;
        this.translate = translate;
        /* TODO's
        * kivezetni a material-t
        * saját tailwind szerü class-ok gyártása
        */
        this.defaultLang = 'hu';
        const currLang = this.localStorage.retrieve('lang');
        this.translate.setDefaultLang(currLang || this.defaultLang);
        if (!currLang) {
            this.localStorage.store('lang', this.defaultLang);
        }
    }
};
AppComponent.ctorParameters = () => [
    { type: ngx_webstorage__WEBPACK_IMPORTED_MODULE_3__["LocalStorageService"] },
    { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__["TranslateService"] }
];
AppComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-root',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")).default]
    })
], AppComponent);



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: createTranslateLoader, AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createTranslateLoader", function() { return createTranslateLoader; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/animations.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _angular_common_locales_hu__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common/locales/hu */ "./node_modules/@angular/common/locales/hu.js");
/* harmony import */ var _angular_common_locales_hu__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_angular_common_locales_hu__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/card */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/card.js");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/input */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/input.js");
/* harmony import */ var _angular_material_slider__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/slider */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/slider.js");
/* harmony import */ var _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/slide-toggle */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/slide-toggle.js");
/* harmony import */ var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/tabs */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/tabs.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/__ivy_ngcc__/fesm2015/ngx-translate-core.js");
/* harmony import */ var _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @ngx-translate/http-loader */ "./node_modules/@ngx-translate/http-loader/__ivy_ngcc__/fesm2015/ngx-translate-http-loader.js");
/* harmony import */ var ngx_webstorage__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ngx-webstorage */ "./node_modules/ngx-webstorage/__ivy_ngcc__/fesm2015/ngx-webstorage.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _games_rikiki_rikiki_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./games/rikiki/rikiki.component */ "./src/app/games/rikiki/rikiki.component.ts");
/* harmony import */ var _games_hearts_hearts_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./games/hearts/hearts.component */ "./src/app/games/hearts/hearts.component.ts");
/* harmony import */ var _games_rikiki_rikiki_service__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./games/rikiki/rikiki.service */ "./src/app/games/rikiki/rikiki.service.ts");
/* harmony import */ var _games_hearts_hearts_service__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./games/hearts/hearts.service */ "./src/app/games/hearts/hearts.service.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
























Object(_angular_common__WEBPACK_IMPORTED_MODULE_4__["registerLocaleData"])(_angular_common_locales_hu__WEBPACK_IMPORTED_MODULE_6___default.a, 'hu');
function createTranslateLoader(http) {
    return new _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_15__["TranslateHttpLoader"](http, './assets/i18n/', '.json');
}
let AppModule = class AppModule {
};
AppModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"])({
        declarations: [
            _app_component__WEBPACK_IMPORTED_MODULE_18__["AppComponent"],
            _home_home_component__WEBPACK_IMPORTED_MODULE_23__["HomeComponent"],
            _games_rikiki_rikiki_component__WEBPACK_IMPORTED_MODULE_19__["RikikiComponent"],
            _games_hearts_hearts_component__WEBPACK_IMPORTED_MODULE_20__["HeartsComponent"],
        ],
        imports: [
            _app_routing_module__WEBPACK_IMPORTED_MODULE_17__["AppRoutingModule"],
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__["BrowserAnimationsModule"],
            _angular_common__WEBPACK_IMPORTED_MODULE_4__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormsModule"],
            ngx_webstorage__WEBPACK_IMPORTED_MODULE_16__["NgxWebstorageModule"].forRoot({
                prefix: 'app-',
                caseSensitive: true,
            }),
            _angular_material_card__WEBPACK_IMPORTED_MODULE_9__["MatCardModule"],
            _angular_material_button__WEBPACK_IMPORTED_MODULE_8__["MatButtonModule"],
            _angular_material_input__WEBPACK_IMPORTED_MODULE_10__["MatInputModule"],
            _angular_material_tabs__WEBPACK_IMPORTED_MODULE_13__["MatTabsModule"],
            _angular_material_slider__WEBPACK_IMPORTED_MODULE_11__["MatSliderModule"],
            _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_12__["MatSlideToggleModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClientModule"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_14__["TranslateModule"].forRoot({
                loader: {
                    provide: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_14__["TranslateLoader"],
                    useFactory: createTranslateLoader,
                    deps: [_angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClient"]],
                },
            }),
        ],
        providers: [_games_rikiki_rikiki_service__WEBPACK_IMPORTED_MODULE_21__["RikikiService"], _games_hearts_hearts_service__WEBPACK_IMPORTED_MODULE_22__["HeartsService"]],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_18__["AppComponent"]]
    })
], AppModule);



/***/ }),

/***/ "./src/app/games/hearts/hearts.component.scss":
/*!****************************************************!*\
  !*** ./src/app/games/hearts/hearts.component.scss ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".hearts-container__play-ground .card-table-panel,\n.hearts-container__play-ground .my-cards-panel {\n  margin: 0 auto;\n  min-width: calc((1024 - 2 * 16) * 1px);\n  max-width: calc((1024 - 2 * 16) * 1px);\n}\n.hearts-container__play-ground .control-panel {\n  margin: 0 auto;\n  min-width: 820px;\n  max-width: 820px;\n}\n.hearts-container__play-ground .score-board {\n  margin: 0 auto;\n  min-width: 400px;\n  max-width: 400px;\n}\n.hearts-container__play-ground .card-table-panel {\n  background-color: var(--table-green);\n  border-top-left-radius: 100px;\n  border-top-right-radius: 100px;\n  border-bottom-left-radius: 0;\n  border-bottom-right-radius: 0;\n  min-height: 356px;\n  max-height: 356px;\n  padding: 16px 16px 0px 16px;\n}\n.hearts-container__play-ground .card-table-panel .swap-direction-icon-wrapper {\n  height: 70px;\n}\n.hearts-container__play-ground .card-table-panel .swap-direction-icon {\n  width: 60px;\n  margin-top: 5px;\n  margin-bottom: 5px;\n}\n.hearts-container__play-ground .my-cards-panel {\n  background-color: var(--table-green);\n  border-top-left-radius: 0;\n  border-top-right-radius: 0;\n  border-bottom-left-radius: 100px;\n  border-bottom-right-radius: 100px;\n  min-height: 240px;\n  max-height: 240px;\n  padding: 0px 16px 16px 16px;\n}\n.hearts-container__play-ground .my-cards-panel_my-cards {\n  height: 130px;\n}\n.hearts-container__play-ground .my-cards-panel_my-cards .my-card-in-hand:hover {\n  cursor: pointer;\n}\n.hearts-container__play-ground .my-cards-panel_my-cards .lifted {\n  margin-bottom: 1rem;\n}\n.hearts-container__play-ground .my-cards-panel_info {\n  min-height: 40px;\n}\n.hearts-container__play-ground .control-panel {\n  padding: 0px 16px;\n}\n.hearts-container__play-ground .control-panel_first-half {\n  flex: 0 1 75%;\n}\n.hearts-container__play-ground .control-panel_second-half {\n  flex: auto;\n}\n.hearts-container__play-ground .control-panel,\n.hearts-container__play-ground .score-board {\n  background-color: var(--primary-lighter-color);\n}\n.hearts-container__play-ground .card-table-other-players {\n  flex: 0 1 calc(100% - 96px);\n}\n.hearts-container__play-ground .card-table-other-players div:nth-child(1) {\n  display: none;\n}\n.hearts-container__play-ground .card-table-other-players div:nth-child(2) {\n  margin-left: 3rem;\n}\n.hearts-container__play-ground .my-card {\n  flex: 0 1 calc(100% - 96px);\n}\n.hearts-container__play-ground .card-size {\n  width: 80px;\n}\n.hearts-container__play-ground .my-cards-panel_placeholder {\n  margin-left: 6px;\n}\n.hearts-container__play-ground .my-cards-panel_my-cards {\n  margin-right: 34px;\n}\n.hearts-container__play-ground .my-cards-panel_card-wrapper {\n  width: 40px;\n}\n.hearts-container__play-ground .mat-slider-horizontal {\n  min-width: 100px;\n}\n.hearts-container__play-ground .score-board-header,\n.hearts-container__play-ground .score-board-row {\n  border-bottom-width: 1px;\n  border-bottom-style: solid;\n  border-color: rgba(0, 0, 0, 0.12);\n}\n.hearts-container__play-ground .score-board-header div:nth-child(n+2),\n.hearts-container__play-ground .score-board-row div:nth-child(n+2) {\n  border-left-width: 1px;\n  border-left-style: solid;\n  border-color: rgba(0, 0, 0, 0.12);\n}\n.hearts-container__play-ground .score-board-header div {\n  height: 36px;\n}\n.hearts-container__play-ground .score-board-header div,\n.hearts-container__play-ground .score-board-row div {\n  width: 80px;\n  padding: 4px 8px;\n  text-align: center;\n}\n.hearts-container__history {\n  margin: 0 auto;\n  min-width: calc((1024 - 2 * 16) * 1px);\n  max-width: calc((1024 - 2 * 16) * 1px);\n  background-color: var(--primary-lighter-color);\n}\n.hearts-container__history .history-score-board-header-name {\n  height: 36px;\n}\n.hearts-container__history .history-score-board-header,\n.hearts-container__history .history-score-board-row {\n  border-bottom-width: 1px;\n  border-bottom-style: solid;\n  border-color: rgba(0, 0, 0, 0.12);\n}\n.hearts-container__history .history-score-board-header div:nth-child(n+2).history-score-board-col,\n.hearts-container__history .history-score-board-row div:nth-child(n+2).history-score-board-col {\n  border-left-width: 1px;\n  border-left-style: solid;\n  border-color: rgba(0, 0, 0, 0.12);\n}\n.hearts-container__history .history-score-board-col {\n  width: 60px;\n  padding: 4px 8px;\n}\n.hearts-container__history .history-score-board-col-height {\n  height: 56px;\n}\n.hearts-container__history .history-card-size {\n  width: 40px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZ2FtZXMvaGVhcnRzL0M6XFxnaXRcXGNhcmQtZ2FtZXMvc3JjXFxhcHBcXGdhbWVzXFxoZWFydHNcXGhlYXJ0cy5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvZ2FtZXMvaGVhcnRzL2hlYXJ0cy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFNUTs7RUFFSSxjQUFBO0VBQ0Esc0NBUE07RUFRTixzQ0FSTTtBQ0dsQjtBRFFRO0VBQ0ksY0FBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7QUNOWjtBRFNRO0VBQ0ksY0FBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7QUNQWjtBRFVRO0VBQ0ksb0NBQUE7RUFDQSw2QkFBQTtFQUNBLDhCQUFBO0VBQ0EsNEJBQUE7RUFDQSw2QkFBQTtFQUNBLGlCQUFBO0VBQ0EsaUJBQUE7RUFDQSwyQkFBQTtBQ1JaO0FEVVk7RUFDSSxZQUFBO0FDUmhCO0FEV1k7RUFDSSxXQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0FDVGhCO0FEYVE7RUFDSSxvQ0FBQTtFQUNBLHlCQUFBO0VBQ0EsMEJBQUE7RUFDQSxnQ0FBQTtFQUNBLGlDQUFBO0VBQ0EsaUJBQUE7RUFDQSxpQkFBQTtFQUNBLDJCQUFBO0FDWFo7QURhWTtFQUNJLGFBQUE7QUNYaEI7QURhb0I7RUFDSSxlQUFBO0FDWHhCO0FEY2dCO0VBQ0ksbUJBQUE7QUNacEI7QURnQlk7RUFDSSxnQkFBQTtBQ2RoQjtBRG1CUTtFQUNJLGlCQUFBO0FDakJaO0FEbUJZO0VBQ0ksYUFBQTtBQ2pCaEI7QURtQlk7RUFDSSxVQUFBO0FDakJoQjtBRHFCUTs7RUFFSSw4Q0FBQTtBQ25CWjtBRHVCUTtFQUNJLDJCQUFBO0FDckJaO0FEc0JZO0VBQ0ksYUFBQTtBQ3BCaEI7QURzQlk7RUFDSSxpQkFBQTtBQ3BCaEI7QUR3QlE7RUFDSSwyQkFBQTtBQ3RCWjtBRHlCUTtFQUNJLFdBQUE7QUN2Qlo7QUQyQlk7RUFDSSxnQkFBQTtBQ3pCaEI7QUQ0Qlk7RUFDSSxrQkFBQTtBQzFCaEI7QUQ2Qlk7RUFDSSxXQUFBO0FDM0JoQjtBRCtCUTtFQUNJLGdCQUFBO0FDN0JaO0FEZ0NROztFQUVJLHdCQUFBO0VBQ0EsMEJBQUE7RUFDQSxpQ0FBQTtBQzlCWjtBRCtCWTs7RUFDSSxzQkFBQTtFQUNBLHdCQUFBO0VBQ0EsaUNBQUE7QUM1QmhCO0FEZ0NRO0VBQ0ksWUFBQTtBQzlCWjtBRGlDUTs7RUFFSSxXQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtBQy9CWjtBRG1DSTtFQUNJLGNBQUE7RUFDQSxzQ0F2SlU7RUF3SlYsc0NBeEpVO0VBeUpWLDhDQUFBO0FDakNSO0FEbUNRO0VBQ0ksWUFBQTtBQ2pDWjtBRG9DUTs7RUFFSSx3QkFBQTtFQUNBLDBCQUFBO0VBQ0EsaUNBQUE7QUNsQ1o7QURtQ1k7O0VBQ0ksc0JBQUE7RUFDQSx3QkFBQTtFQUNBLGlDQUFBO0FDaENoQjtBRG9DUTtFQUNJLFdBQUE7RUFDQSxnQkFBQTtBQ2xDWjtBRHFDUTtFQUNJLFlBQUE7QUNuQ1o7QURzQ1E7RUFDSSxXQUFBO0FDcENaIiwiZmlsZSI6InNyYy9hcHAvZ2FtZXMvaGVhcnRzL2hlYXJ0cy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIiRwYW5lbC1wYWRkaW5nOiAxNjtcclxuJG1heC1nYW1lLXNjcmVlbjogMTAyNDtcclxuJG1heC1yZW5kZXItYXJlYTogY2FsYygoI3skbWF4LWdhbWUtc2NyZWVufSAtIDIgKiAjeyRwYW5lbC1wYWRkaW5nfSkgKiAxcHgpO1xyXG5cclxuLmhlYXJ0cy1jb250YWluZXIge1xyXG4gICAgJl9fcGxheS1ncm91bmQge1xyXG4gICAgICAgIC5jYXJkLXRhYmxlLXBhbmVsLFxyXG4gICAgICAgIC5teS1jYXJkcy1wYW5lbCB7XHJcbiAgICAgICAgICAgIG1hcmdpbjogMCBhdXRvO1xyXG4gICAgICAgICAgICBtaW4td2lkdGg6ICRtYXgtcmVuZGVyLWFyZWE7XHJcbiAgICAgICAgICAgIG1heC13aWR0aDogJG1heC1yZW5kZXItYXJlYTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC5jb250cm9sLXBhbmVsIHtcclxuICAgICAgICAgICAgbWFyZ2luOiAwIGF1dG87XHJcbiAgICAgICAgICAgIG1pbi13aWR0aDogODIwcHg7XHJcbiAgICAgICAgICAgIG1heC13aWR0aDogODIwcHg7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAuc2NvcmUtYm9hcmQge1xyXG4gICAgICAgICAgICBtYXJnaW46IDAgYXV0bztcclxuICAgICAgICAgICAgbWluLXdpZHRoOiA0MDBweDtcclxuICAgICAgICAgICAgbWF4LXdpZHRoOiA0MDBweDtcclxuICAgICAgICB9XHJcbiAgICBcclxuICAgICAgICAuY2FyZC10YWJsZS1wYW5lbCB7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXRhYmxlLWdyZWVuKTtcclxuICAgICAgICAgICAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogMTAwcHg7XHJcbiAgICAgICAgICAgIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAxMDBweDtcclxuICAgICAgICAgICAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogMDtcclxuICAgICAgICAgICAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDA7XHJcbiAgICAgICAgICAgIG1pbi1oZWlnaHQ6IDM1NnB4O1xyXG4gICAgICAgICAgICBtYXgtaGVpZ2h0OiAzNTZweDtcclxuICAgICAgICAgICAgcGFkZGluZzogMTZweCAxNnB4IDBweCAxNnB4O1xyXG5cclxuICAgICAgICAgICAgLnN3YXAtZGlyZWN0aW9uLWljb24td3JhcHBlciB7XHJcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDcwcHg7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIC5zd2FwLWRpcmVjdGlvbi1pY29uIHtcclxuICAgICAgICAgICAgICAgIHdpZHRoOiA2MHB4O1xyXG4gICAgICAgICAgICAgICAgbWFyZ2luLXRvcDogNXB4O1xyXG4gICAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogNXB4O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgXHJcbiAgICAgICAgLm15LWNhcmRzLXBhbmVsIHtcclxuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tdGFibGUtZ3JlZW4pO1xyXG4gICAgICAgICAgICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAwO1xyXG4gICAgICAgICAgICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogMDtcclxuICAgICAgICAgICAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogMTAwcHg7XHJcbiAgICAgICAgICAgIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiAxMDBweDtcclxuICAgICAgICAgICAgbWluLWhlaWdodDogMjQwcHg7XHJcbiAgICAgICAgICAgIG1heC1oZWlnaHQ6IDI0MHB4O1xyXG4gICAgICAgICAgICBwYWRkaW5nOiAwcHggMTZweCAxNnB4IDE2cHg7XHJcblxyXG4gICAgICAgICAgICAmX215LWNhcmRzIHtcclxuICAgICAgICAgICAgICAgIGhlaWdodDogMTMwcHg7XHJcbiAgICAgICAgICAgICAgICAubXktY2FyZC1pbi1oYW5kIHtcclxuICAgICAgICAgICAgICAgICAgICAmOmhvdmVyIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIC5saWZ0ZWQge1xyXG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDFyZW07XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICZfaW5mbyB7XHJcbiAgICAgICAgICAgICAgICBtaW4taGVpZ2h0OiA0MHB4O1xyXG4gICAgICAgICAgICB9XHJcbiAgICBcclxuICAgICAgICB9XHJcbiAgICBcclxuICAgICAgICAuY29udHJvbC1wYW5lbCB7XHJcbiAgICAgICAgICAgIHBhZGRpbmc6IDBweCAxNnB4O1xyXG4gICAgXHJcbiAgICAgICAgICAgICZfZmlyc3QtaGFsZiB7XHJcbiAgICAgICAgICAgICAgICBmbGV4OiAwIDEgNzUlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICZfc2Vjb25kLWhhbGYge1xyXG4gICAgICAgICAgICAgICAgZmxleDogYXV0bztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIFxyXG4gICAgICAgIC5jb250cm9sLXBhbmVsLFxyXG4gICAgICAgIC5zY29yZS1ib2FyZCB7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXByaW1hcnktbGlnaHRlci1jb2xvcik7XHJcbiAgICAgICAgfVxyXG4gICAgXHJcbiAgICBcclxuICAgICAgICAuY2FyZC10YWJsZS1vdGhlci1wbGF5ZXJzIHtcclxuICAgICAgICAgICAgZmxleDogMCAxIGNhbGMoMTAwJSAtIDk2cHgpO1xyXG4gICAgICAgICAgICBkaXY6bnRoLWNoaWxkKDEpIHtcclxuICAgICAgICAgICAgICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZGl2Om50aC1jaGlsZCgyKSB7XHJcbiAgICAgICAgICAgICAgICBtYXJnaW4tbGVmdDogM3JlbTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLm15LWNhcmQge1xyXG4gICAgICAgICAgICBmbGV4OiAwIDEgY2FsYygxMDAlIC0gOTZweCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAuY2FyZC1zaXplIHtcclxuICAgICAgICAgICAgd2lkdGg6IDgwcHg7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAubXktY2FyZHMtcGFuZWwge1xyXG4gICAgICAgICAgICAmX3BsYWNlaG9sZGVyIHtcclxuICAgICAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiA2cHg7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICZfbXktY2FyZHMge1xyXG4gICAgICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiAzNHB4O1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAmX2NhcmQtd3JhcHBlciB7XHJcbiAgICAgICAgICAgICAgICB3aWR0aDogNDBweDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLm1hdC1zbGlkZXItaG9yaXpvbnRhbCB7XHJcbiAgICAgICAgICAgIG1pbi13aWR0aDogMTAwcHg7XHJcbiAgICAgICAgfVxyXG4gICAgXHJcbiAgICAgICAgLnNjb3JlLWJvYXJkLWhlYWRlcixcclxuICAgICAgICAuc2NvcmUtYm9hcmQtcm93IHtcclxuICAgICAgICAgICAgYm9yZGVyLWJvdHRvbS13aWR0aDogMXB4O1xyXG4gICAgICAgICAgICBib3JkZXItYm90dG9tLXN0eWxlOiBzb2xpZDtcclxuICAgICAgICAgICAgYm9yZGVyLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuMTIpO1xyXG4gICAgICAgICAgICBkaXY6bnRoLWNoaWxkKG4gKyAyKSB7XHJcbiAgICAgICAgICAgICAgICBib3JkZXItbGVmdC13aWR0aDogMXB4O1xyXG4gICAgICAgICAgICAgICAgYm9yZGVyLWxlZnQtc3R5bGU6IHNvbGlkO1xyXG4gICAgICAgICAgICAgICAgYm9yZGVyLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuMTIpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAuc2NvcmUtYm9hcmQtaGVhZGVyIGRpdiB7XHJcbiAgICAgICAgICAgIGhlaWdodDogMzZweDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC5zY29yZS1ib2FyZC1oZWFkZXIgZGl2LFxyXG4gICAgICAgIC5zY29yZS1ib2FyZC1yb3cgZGl2IHtcclxuICAgICAgICAgICAgd2lkdGg6IDgwcHg7XHJcbiAgICAgICAgICAgIHBhZGRpbmc6IDRweCA4cHg7XHJcbiAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgJl9faGlzdG9yeSB7XHJcbiAgICAgICAgbWFyZ2luOiAwIGF1dG87XHJcbiAgICAgICAgbWluLXdpZHRoOiAkbWF4LXJlbmRlci1hcmVhO1xyXG4gICAgICAgIG1heC13aWR0aDogJG1heC1yZW5kZXItYXJlYTtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1wcmltYXJ5LWxpZ2h0ZXItY29sb3IpO1xyXG5cclxuICAgICAgICAuaGlzdG9yeS1zY29yZS1ib2FyZC1oZWFkZXItbmFtZSB7XHJcbiAgICAgICAgICAgIGhlaWdodDogMzZweDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC5oaXN0b3J5LXNjb3JlLWJvYXJkLWhlYWRlcixcclxuICAgICAgICAuaGlzdG9yeS1zY29yZS1ib2FyZC1yb3cge1xyXG4gICAgICAgICAgICBib3JkZXItYm90dG9tLXdpZHRoOiAxcHg7XHJcbiAgICAgICAgICAgIGJvcmRlci1ib3R0b20tc3R5bGU6IHNvbGlkO1xyXG4gICAgICAgICAgICBib3JkZXItY29sb3I6IHJnYmEoMCwgMCwgMCwgMC4xMik7XHJcbiAgICAgICAgICAgIGRpdjpudGgtY2hpbGQobiArIDIpLmhpc3Rvcnktc2NvcmUtYm9hcmQtY29sIHtcclxuICAgICAgICAgICAgICAgIGJvcmRlci1sZWZ0LXdpZHRoOiAxcHg7XHJcbiAgICAgICAgICAgICAgICBib3JkZXItbGVmdC1zdHlsZTogc29saWQ7XHJcbiAgICAgICAgICAgICAgICBib3JkZXItY29sb3I6IHJnYmEoMCwgMCwgMCwgMC4xMik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICBcclxuICAgICAgICAuaGlzdG9yeS1zY29yZS1ib2FyZC1jb2wge1xyXG4gICAgICAgICAgICB3aWR0aDogNjBweDtcclxuICAgICAgICAgICAgcGFkZGluZzogNHB4IDhweDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC5oaXN0b3J5LXNjb3JlLWJvYXJkLWNvbC1oZWlnaHQge1xyXG4gICAgICAgICAgICBoZWlnaHQ6IDU2cHg7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAuaGlzdG9yeS1jYXJkLXNpemUge1xyXG4gICAgICAgICAgICB3aWR0aDogNDBweDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuIiwiLmhlYXJ0cy1jb250YWluZXJfX3BsYXktZ3JvdW5kIC5jYXJkLXRhYmxlLXBhbmVsLFxuLmhlYXJ0cy1jb250YWluZXJfX3BsYXktZ3JvdW5kIC5teS1jYXJkcy1wYW5lbCB7XG4gIG1hcmdpbjogMCBhdXRvO1xuICBtaW4td2lkdGg6IGNhbGMoKDEwMjQgLSAyICogMTYpICogMXB4KTtcbiAgbWF4LXdpZHRoOiBjYWxjKCgxMDI0IC0gMiAqIDE2KSAqIDFweCk7XG59XG4uaGVhcnRzLWNvbnRhaW5lcl9fcGxheS1ncm91bmQgLmNvbnRyb2wtcGFuZWwge1xuICBtYXJnaW46IDAgYXV0bztcbiAgbWluLXdpZHRoOiA4MjBweDtcbiAgbWF4LXdpZHRoOiA4MjBweDtcbn1cbi5oZWFydHMtY29udGFpbmVyX19wbGF5LWdyb3VuZCAuc2NvcmUtYm9hcmQge1xuICBtYXJnaW46IDAgYXV0bztcbiAgbWluLXdpZHRoOiA0MDBweDtcbiAgbWF4LXdpZHRoOiA0MDBweDtcbn1cbi5oZWFydHMtY29udGFpbmVyX19wbGF5LWdyb3VuZCAuY2FyZC10YWJsZS1wYW5lbCB7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXRhYmxlLWdyZWVuKTtcbiAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogMTAwcHg7XG4gIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAxMDBweDtcbiAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogMDtcbiAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDA7XG4gIG1pbi1oZWlnaHQ6IDM1NnB4O1xuICBtYXgtaGVpZ2h0OiAzNTZweDtcbiAgcGFkZGluZzogMTZweCAxNnB4IDBweCAxNnB4O1xufVxuLmhlYXJ0cy1jb250YWluZXJfX3BsYXktZ3JvdW5kIC5jYXJkLXRhYmxlLXBhbmVsIC5zd2FwLWRpcmVjdGlvbi1pY29uLXdyYXBwZXIge1xuICBoZWlnaHQ6IDcwcHg7XG59XG4uaGVhcnRzLWNvbnRhaW5lcl9fcGxheS1ncm91bmQgLmNhcmQtdGFibGUtcGFuZWwgLnN3YXAtZGlyZWN0aW9uLWljb24ge1xuICB3aWR0aDogNjBweDtcbiAgbWFyZ2luLXRvcDogNXB4O1xuICBtYXJnaW4tYm90dG9tOiA1cHg7XG59XG4uaGVhcnRzLWNvbnRhaW5lcl9fcGxheS1ncm91bmQgLm15LWNhcmRzLXBhbmVsIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tdGFibGUtZ3JlZW4pO1xuICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAwO1xuICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogMDtcbiAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogMTAwcHg7XG4gIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiAxMDBweDtcbiAgbWluLWhlaWdodDogMjQwcHg7XG4gIG1heC1oZWlnaHQ6IDI0MHB4O1xuICBwYWRkaW5nOiAwcHggMTZweCAxNnB4IDE2cHg7XG59XG4uaGVhcnRzLWNvbnRhaW5lcl9fcGxheS1ncm91bmQgLm15LWNhcmRzLXBhbmVsX215LWNhcmRzIHtcbiAgaGVpZ2h0OiAxMzBweDtcbn1cbi5oZWFydHMtY29udGFpbmVyX19wbGF5LWdyb3VuZCAubXktY2FyZHMtcGFuZWxfbXktY2FyZHMgLm15LWNhcmQtaW4taGFuZDpob3ZlciB7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cbi5oZWFydHMtY29udGFpbmVyX19wbGF5LWdyb3VuZCAubXktY2FyZHMtcGFuZWxfbXktY2FyZHMgLmxpZnRlZCB7XG4gIG1hcmdpbi1ib3R0b206IDFyZW07XG59XG4uaGVhcnRzLWNvbnRhaW5lcl9fcGxheS1ncm91bmQgLm15LWNhcmRzLXBhbmVsX2luZm8ge1xuICBtaW4taGVpZ2h0OiA0MHB4O1xufVxuLmhlYXJ0cy1jb250YWluZXJfX3BsYXktZ3JvdW5kIC5jb250cm9sLXBhbmVsIHtcbiAgcGFkZGluZzogMHB4IDE2cHg7XG59XG4uaGVhcnRzLWNvbnRhaW5lcl9fcGxheS1ncm91bmQgLmNvbnRyb2wtcGFuZWxfZmlyc3QtaGFsZiB7XG4gIGZsZXg6IDAgMSA3NSU7XG59XG4uaGVhcnRzLWNvbnRhaW5lcl9fcGxheS1ncm91bmQgLmNvbnRyb2wtcGFuZWxfc2Vjb25kLWhhbGYge1xuICBmbGV4OiBhdXRvO1xufVxuLmhlYXJ0cy1jb250YWluZXJfX3BsYXktZ3JvdW5kIC5jb250cm9sLXBhbmVsLFxuLmhlYXJ0cy1jb250YWluZXJfX3BsYXktZ3JvdW5kIC5zY29yZS1ib2FyZCB7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXByaW1hcnktbGlnaHRlci1jb2xvcik7XG59XG4uaGVhcnRzLWNvbnRhaW5lcl9fcGxheS1ncm91bmQgLmNhcmQtdGFibGUtb3RoZXItcGxheWVycyB7XG4gIGZsZXg6IDAgMSBjYWxjKDEwMCUgLSA5NnB4KTtcbn1cbi5oZWFydHMtY29udGFpbmVyX19wbGF5LWdyb3VuZCAuY2FyZC10YWJsZS1vdGhlci1wbGF5ZXJzIGRpdjpudGgtY2hpbGQoMSkge1xuICBkaXNwbGF5OiBub25lO1xufVxuLmhlYXJ0cy1jb250YWluZXJfX3BsYXktZ3JvdW5kIC5jYXJkLXRhYmxlLW90aGVyLXBsYXllcnMgZGl2Om50aC1jaGlsZCgyKSB7XG4gIG1hcmdpbi1sZWZ0OiAzcmVtO1xufVxuLmhlYXJ0cy1jb250YWluZXJfX3BsYXktZ3JvdW5kIC5teS1jYXJkIHtcbiAgZmxleDogMCAxIGNhbGMoMTAwJSAtIDk2cHgpO1xufVxuLmhlYXJ0cy1jb250YWluZXJfX3BsYXktZ3JvdW5kIC5jYXJkLXNpemUge1xuICB3aWR0aDogODBweDtcbn1cbi5oZWFydHMtY29udGFpbmVyX19wbGF5LWdyb3VuZCAubXktY2FyZHMtcGFuZWxfcGxhY2Vob2xkZXIge1xuICBtYXJnaW4tbGVmdDogNnB4O1xufVxuLmhlYXJ0cy1jb250YWluZXJfX3BsYXktZ3JvdW5kIC5teS1jYXJkcy1wYW5lbF9teS1jYXJkcyB7XG4gIG1hcmdpbi1yaWdodDogMzRweDtcbn1cbi5oZWFydHMtY29udGFpbmVyX19wbGF5LWdyb3VuZCAubXktY2FyZHMtcGFuZWxfY2FyZC13cmFwcGVyIHtcbiAgd2lkdGg6IDQwcHg7XG59XG4uaGVhcnRzLWNvbnRhaW5lcl9fcGxheS1ncm91bmQgLm1hdC1zbGlkZXItaG9yaXpvbnRhbCB7XG4gIG1pbi13aWR0aDogMTAwcHg7XG59XG4uaGVhcnRzLWNvbnRhaW5lcl9fcGxheS1ncm91bmQgLnNjb3JlLWJvYXJkLWhlYWRlcixcbi5oZWFydHMtY29udGFpbmVyX19wbGF5LWdyb3VuZCAuc2NvcmUtYm9hcmQtcm93IHtcbiAgYm9yZGVyLWJvdHRvbS13aWR0aDogMXB4O1xuICBib3JkZXItYm90dG9tLXN0eWxlOiBzb2xpZDtcbiAgYm9yZGVyLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuMTIpO1xufVxuLmhlYXJ0cy1jb250YWluZXJfX3BsYXktZ3JvdW5kIC5zY29yZS1ib2FyZC1oZWFkZXIgZGl2Om50aC1jaGlsZChuKzIpLFxuLmhlYXJ0cy1jb250YWluZXJfX3BsYXktZ3JvdW5kIC5zY29yZS1ib2FyZC1yb3cgZGl2Om50aC1jaGlsZChuKzIpIHtcbiAgYm9yZGVyLWxlZnQtd2lkdGg6IDFweDtcbiAgYm9yZGVyLWxlZnQtc3R5bGU6IHNvbGlkO1xuICBib3JkZXItY29sb3I6IHJnYmEoMCwgMCwgMCwgMC4xMik7XG59XG4uaGVhcnRzLWNvbnRhaW5lcl9fcGxheS1ncm91bmQgLnNjb3JlLWJvYXJkLWhlYWRlciBkaXYge1xuICBoZWlnaHQ6IDM2cHg7XG59XG4uaGVhcnRzLWNvbnRhaW5lcl9fcGxheS1ncm91bmQgLnNjb3JlLWJvYXJkLWhlYWRlciBkaXYsXG4uaGVhcnRzLWNvbnRhaW5lcl9fcGxheS1ncm91bmQgLnNjb3JlLWJvYXJkLXJvdyBkaXYge1xuICB3aWR0aDogODBweDtcbiAgcGFkZGluZzogNHB4IDhweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuLmhlYXJ0cy1jb250YWluZXJfX2hpc3Rvcnkge1xuICBtYXJnaW46IDAgYXV0bztcbiAgbWluLXdpZHRoOiBjYWxjKCgxMDI0IC0gMiAqIDE2KSAqIDFweCk7XG4gIG1heC13aWR0aDogY2FsYygoMTAyNCAtIDIgKiAxNikgKiAxcHgpO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1wcmltYXJ5LWxpZ2h0ZXItY29sb3IpO1xufVxuLmhlYXJ0cy1jb250YWluZXJfX2hpc3RvcnkgLmhpc3Rvcnktc2NvcmUtYm9hcmQtaGVhZGVyLW5hbWUge1xuICBoZWlnaHQ6IDM2cHg7XG59XG4uaGVhcnRzLWNvbnRhaW5lcl9faGlzdG9yeSAuaGlzdG9yeS1zY29yZS1ib2FyZC1oZWFkZXIsXG4uaGVhcnRzLWNvbnRhaW5lcl9faGlzdG9yeSAuaGlzdG9yeS1zY29yZS1ib2FyZC1yb3cge1xuICBib3JkZXItYm90dG9tLXdpZHRoOiAxcHg7XG4gIGJvcmRlci1ib3R0b20tc3R5bGU6IHNvbGlkO1xuICBib3JkZXItY29sb3I6IHJnYmEoMCwgMCwgMCwgMC4xMik7XG59XG4uaGVhcnRzLWNvbnRhaW5lcl9faGlzdG9yeSAuaGlzdG9yeS1zY29yZS1ib2FyZC1oZWFkZXIgZGl2Om50aC1jaGlsZChuKzIpLmhpc3Rvcnktc2NvcmUtYm9hcmQtY29sLFxuLmhlYXJ0cy1jb250YWluZXJfX2hpc3RvcnkgLmhpc3Rvcnktc2NvcmUtYm9hcmQtcm93IGRpdjpudGgtY2hpbGQobisyKS5oaXN0b3J5LXNjb3JlLWJvYXJkLWNvbCB7XG4gIGJvcmRlci1sZWZ0LXdpZHRoOiAxcHg7XG4gIGJvcmRlci1sZWZ0LXN0eWxlOiBzb2xpZDtcbiAgYm9yZGVyLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuMTIpO1xufVxuLmhlYXJ0cy1jb250YWluZXJfX2hpc3RvcnkgLmhpc3Rvcnktc2NvcmUtYm9hcmQtY29sIHtcbiAgd2lkdGg6IDYwcHg7XG4gIHBhZGRpbmc6IDRweCA4cHg7XG59XG4uaGVhcnRzLWNvbnRhaW5lcl9faGlzdG9yeSAuaGlzdG9yeS1zY29yZS1ib2FyZC1jb2wtaGVpZ2h0IHtcbiAgaGVpZ2h0OiA1NnB4O1xufVxuLmhlYXJ0cy1jb250YWluZXJfX2hpc3RvcnkgLmhpc3RvcnktY2FyZC1zaXplIHtcbiAgd2lkdGg6IDQwcHg7XG59Il19 */");

/***/ }),

/***/ "./src/app/games/hearts/hearts.component.ts":
/*!**************************************************!*\
  !*** ./src/app/games/hearts/hearts.component.ts ***!
  \**************************************************/
/*! exports provided: HeartsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeartsComponent", function() { return HeartsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _table_parts_suit_suit__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../table-parts/suit/suit */ "./src/app/table-parts/suit/suit.ts");
/* harmony import */ var _table_parts_table_hearts_table__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../table-parts/table/hearts-table */ "./src/app/table-parts/table/hearts-table.ts");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/__ivy_ngcc__/fesm2015/ngx-translate-core.js");
/* harmony import */ var _hearts_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./hearts.service */ "./src/app/games/hearts/hearts.service.ts");
/* harmony import */ var src_app_table_parts_suit_suits__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/table-parts/suit/suits */ "./src/app/table-parts/suit/suits.ts");
/* harmony import */ var src_app_table_parts_card_cards__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/table-parts/card/cards */ "./src/app/table-parts/card/cards.ts");
/* harmony import */ var lodash_es__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! lodash-es */ "./node_modules/lodash-es/lodash.js");









let HeartsComponent = class HeartsComponent {
    constructor(element, translate, heartsService) {
        var _a;
        this.element = element;
        this.translate = translate;
        this.heartsService = heartsService;
        /* TODO's
        * game init-ben nem kell új asztal és a játékosok neve és száma sem változik
        * megtanítani, hogy fogja meg a hot tricket
        */
        this.imgUrlPrefix = 'assets/images/';
        this.imgUrlSuffix = '.svg';
        this.defaultMsg = { type: '', msg: ' ', subMsg: ' ', translateParams: {} };
        this.deckSize = 52;
        this.playerNames = ['West', 'North', 'East'];
        this.nrOfPlayers = 4;
        this.swapDirections = [0, 1, 3, 2];
        this.placeholderCardImgUrl = `${this.imgUrlPrefix}card_placeholder${this.imgUrlSuffix}`;
        this.cardBackImgUrl = `${this.imgUrlPrefix}card_back_2${this.imgUrlSuffix}`;
        this.swapDirectionImgUrl = `${this.imgUrlPrefix}arrow_0${this.imgUrlSuffix}`;
        this.players = [];
        this.cardUrls = [];
        this.myCardUrl = this.placeholderCardImgUrl;
        this.allMessage = this.defaultMsg;
        this.history = [];
        this.myTable = new _table_parts_table_hearts_table__WEBPACK_IMPORTED_MODULE_3__["HeartsTable"](this.nrOfPlayers);
        this.endOfGame = true;
        this.endOfRound = true;
        this.endOf3CardsSelection = true;
        this.selectedCardsToSwap = [];
        this.endOfSelection = true;
        this.playerName = (_a = history.state.data) === null || _a === void 0 ? void 0 : _a.playerName;
        this.leaveGame();
    }
    convertCardToImgUrl(card) {
        return `${this.imgUrlPrefix}${card.printCard()}${this.imgUrlSuffix}`;
    }
    leaveGame() {
        this.myCardUrl = this.placeholderCardImgUrl;
        this.allMessage = this.defaultMsg;
        this.endOfGame = true;
        this.endOfRound = true;
        this.endOf3CardsSelection = true;
        this.endOfSelection = true;
        this.initGame();
    }
    newGame() {
        this.endOfGame = false;
        this.initGame();
        this.newRound();
    }
    newRound() {
        this.round += 1;
        this.myTable.resetHeartsBroken();
        this.endOfRound = false;
        this.selectedCardsToSwap = [];
        this.swapDirectionIdx = this.round % 4;
        this.swapDirectionImgUrl = `${this.imgUrlPrefix}arrow_${this.swapDirectionIdx}${this.imgUrlSuffix}`;
        this.showTableCards();
        // pont számlálók beállítása
        for (let i = 0; i < this.nrOfPlayers; ++i) {
            const player = this.players[i];
            player.resetReal();
        }
        // az összes kártya kiosztása a négy játékos között
        let playerIdx = 0;
        for (let i = 0; i < this.deckSize; ++i) {
            playerIdx = i % 4;
            this.myTable.getPlayer(playerIdx).addCard(this.myTable.getCardFromDeck());
        }
        // kártyák sorba rendezése
        this.myTable.getPlayer(0).sortPlayerCards();
        // 3 kártya választása cseréhez
        if (this.swapDirectionIdx) {
            this.select3CardToSwap();
        }
        else {
            this.endOf3CardsSelection = false;
            for (let i = 0; i < 3; i++) {
                this.selectedCardsToSwap.push(src_app_table_parts_card_cards__WEBPACK_IMPORTED_MODULE_7__["nullCard"]);
            }
            this.allMessage = {
                type: 'info',
                msg: 'MY_CARDS_PANEL.MESSAGES.NO_SWAP',
                subMsg: ' ',
                translateParams: {}
            };
        }
    }
    swapCards() {
        this.endOf3CardsSelection = true;
        if (this.swapDirectionIdx) {
            for (let i = 0; i < this.selectedCardsToSwap.length; i++) {
                this.heartsService.moveToSwap(this.myTable.getPlayer(0), this.selectedCardsToSwap[i]);
            }
            const swapDirection = this.swapDirections[this.swapDirectionIdx];
            // kiválasztott kártyák cseréje
            for (let i = 0; i < this.nrOfPlayers; i++) {
                const playerWhoGive = this.myTable.getPlayer(i);
                const playerWhoRecieves = this.myTable.getPlayer((i + swapDirection) % 4);
                const cardsOfPlayerWhoGive = playerWhoGive.getCardsToSwap();
                for (let j = 0; j < cardsOfPlayerWhoGive.length; j++) {
                    const cardToGive = cardsOfPlayerWhoGive[j];
                    playerWhoRecieves.addCard(cardToGive);
                }
            }
            // kártyák sorba rendezése
            this.myTable.getPlayer(0).sortPlayerCards();
        }
        this.selectedCardsToSwap = [];
        this.setStarterAndPlayTurn();
    }
    checkSelectedCard(playerIsStarter, selectedCard, playerCards, playerCardsLength, firstCardSuit) {
        const selectedCardSuit = selectedCard.getSuit();
        const isOnlyHearts = playerCards.hearts.length === playerCardsLength;
        const isOnlyHeartsAndSpadeQueen = playerCards.hearts.length === (playerCardsLength - 1) && Object(src_app_table_parts_card_cards__WEBPACK_IMPORTED_MODULE_7__["isSpecificCardIncluded"])(playerCards.spades, src_app_table_parts_card_cards__WEBPACK_IMPORTED_MODULE_7__["spadeQueen"]);
        const heartsAndSpadeQueenException = isOnlyHearts || (isOnlyHeartsAndSpadeQueen && Object(src_app_table_parts_card_cards__WEBPACK_IMPORTED_MODULE_7__["isSpecificCard"])(selectedCard, src_app_table_parts_card_cards__WEBPACK_IMPORTED_MODULE_7__["spadeQueen"]));
        const notHeartsOrSpadeQueenSelected = selectedCardSuit !== _table_parts_suit_suit__WEBPACK_IMPORTED_MODULE_2__["Suit"].HEART && !Object(src_app_table_parts_card_cards__WEBPACK_IMPORTED_MODULE_7__["isSpecificCard"])(selectedCard, src_app_table_parts_card_cards__WEBPACK_IMPORTED_MODULE_7__["spadeQueen"]);
        const clubTwoselected = (playerCardsLength === 13 && Object(src_app_table_parts_card_cards__WEBPACK_IMPORTED_MODULE_7__["isSpecificCard"])(selectedCard, src_app_table_parts_card_cards__WEBPACK_IMPORTED_MODULE_7__["clubTwo"]));
        if (playerIsStarter) {
            if (playerIsStarter
                && (clubTwoselected
                    || (playerCardsLength < 13
                        && (this.myTable.isHeartsBroken()
                            || (!this.myTable.isHeartsBroken() && (notHeartsOrSpadeQueenSelected || heartsAndSpadeQueenException)))))) {
                return { isSelectedValid: true };
            }
            if (playerCardsLength === 13 && !clubTwoselected) {
                return { isSelectedValid: false, hasFirstCardSuit: false, invalidSuitSelection: 'clubTwo' };
            }
        }
        else {
            const openSuit = src_app_table_parts_suit_suits__WEBPACK_IMPORTED_MODULE_6__["suits"][firstCardSuit - 1];
            const hasFirstCardSuit = playerCards[openSuit].length;
            // ha kezdő szín lett választva
            if (selectedCardSuit === firstCardSuit
                // vagy nincs kezdő színű kártyája és nem szív színű kártya vagy pikk dáma lett választva
                || !hasFirstCardSuit && notHeartsOrSpadeQueenSelected
                // vagy csak szív színű kártyák vannak vagy 12 szív színű kártya és a pikk Q, ilyenkor pikk Q-t kell választani
                || heartsAndSpadeQueenException
                // vagy nincs kezdő színű kártyája és nem az első kör van
                || !hasFirstCardSuit && playerCardsLength < 13) {
                return { isSelectedValid: true };
            }
            if (hasFirstCardSuit && selectedCardSuit !== firstCardSuit) {
                return { isSelectedValid: false, hasFirstCardSuit };
            }
        }
        if (selectedCardSuit === _table_parts_suit_suit__WEBPACK_IMPORTED_MODULE_2__["Suit"].HEART || Object(src_app_table_parts_card_cards__WEBPACK_IMPORTED_MODULE_7__["isSpecificCard"])(selectedCard, src_app_table_parts_card_cards__WEBPACK_IMPORTED_MODULE_7__["spadeQueen"])) {
            return { isSelectedValid: false, hasFirstCardSuit: false, invalidSuitSelection: 'hearts' };
        }
        return { isSelectedValid: true };
    }
    selectedCard(selectedCard) {
        if (!this.endOfSelection) {
            const player = this.myTable.getPlayer(0);
            const playerCards = player.getSortedCards();
            const playerCardsLength = player.getSortedCardsLength();
            const firstCardSuit = this.myTable.getFirstCard().getSuit();
            const checkedCards = this.checkSelectedCard(player.isStarter(), selectedCard, playerCards, playerCardsLength, firstCardSuit);
            if (checkedCards.isSelectedValid) {
                this.myTable.getPlayer(0).removeCard(selectedCard);
                this.myTable.putCardOnTable(0, selectedCard);
                this.handleRound();
                this.setPlayersTurn();
                this.endOfSelection = true;
                this.allMessage = this.defaultMsg;
            }
            else {
                if (checkedCards.hasFirstCardSuit) {
                    const suitNames = ['CLUB', 'DIAMOND', 'HEART', 'SPADE'];
                    this.translate.get(suitNames[firstCardSuit - 1])
                        .subscribe((translation) => {
                        this.allMessage = {
                            type: 'error',
                            msg: 'MY_CARDS_PANEL.MESSAGES.INCORRECT_SELECTION',
                            subMsg: 'MY_CARDS_PANEL.MESSAGES.SELECT_FIRST_CARD_SUIT',
                            translateParams: { suit: translation }
                        };
                    });
                }
                else if (checkedCards.invalidSuitSelection) {
                    if (checkedCards.invalidSuitSelection === 'clubTwo') {
                        this.allMessage = {
                            type: 'error',
                            msg: 'MY_CARDS_PANEL.MESSAGES.INCORRECT_SELECTION',
                            subMsg: 'MY_CARDS_PANEL.MESSAGES.START_WITH_CLUB_TWO',
                            translateParams: {}
                        };
                    }
                    else if (checkedCards.invalidSuitSelection === 'hearts') {
                        this.allMessage = {
                            type: 'error',
                            msg: 'MY_CARDS_PANEL.MESSAGES.INCORRECT_SELECTION',
                            subMsg: 'MY_CARDS_PANEL.MESSAGES.HEARTS_NOT_BROKEN',
                            translateParams: {}
                        };
                    }
                }
            }
        }
        if (!this.endOf3CardsSelection && this.swapDirectionIdx) {
            const alreadySelectedToSwap = this.selectedCardsToSwap.includes(selectedCard);
            if (alreadySelectedToSwap) {
                this.selectedCardsToSwap =
                    this.selectedCardsToSwap.filter((selectedCardToSwap) => selectedCardToSwap !== selectedCard);
                this.toggleSelectedCard(selectedCard);
            }
            else if (!alreadySelectedToSwap && this.selectedCardsToSwap.length < 3) {
                this.selectedCardsToSwap.push(selectedCard);
                this.toggleSelectedCard(selectedCard);
            }
        }
    }
    confirmStand() {
        this.endOfSelection = false;
        if (this.myTable.getPlayer(0).hasCard()) {
            this.showTableCards();
            this.askPlayerToSelectCard();
        }
        if (!this.myTable.getPlayer(this.lastPlayerIdx).hasCard()) {
            this.setScore();
            let isScoreLimit = false;
            for (let i = 0; !isScoreLimit && i < this.nrOfPlayers; ++i) {
                isScoreLimit = this.myTable.getPlayer(i).getScore() > 99;
            }
            this.addToHistory();
            this.endOfSelection = true;
            this.endOfRound = true;
            this.shuffle();
            if (isScoreLimit) {
                this.endOfGame = true;
                this.findWinner();
            }
        }
    }
    initGame() {
        this.cardUrls = [];
        for (let i = 0; i < this.nrOfPlayers; i++) {
            this.cardUrls[i] = this.placeholderCardImgUrl;
        }
        if (this.playerName) {
            this.myTable.getPlayer(0).setName(this.playerName);
        }
        for (let i = 1; i < this.nrOfPlayers; ++i) {
            this.myTable.getPlayer(i).setName(this.playerNames[i - 1]);
        }
        this.players = this.myTable.getPlayers();
        // pont számlálók beállítása
        for (let i = 0; i < this.nrOfPlayers; ++i) {
            const player = this.players[i];
            player.resetScore();
            player.resetReal();
        }
        this.round = 0;
        this.swapDirectionIdx = 1;
        this.swapDirectionImgUrl = `${this.imgUrlPrefix}arrow_${this.swapDirectionIdx}${this.imgUrlSuffix}`;
        this.history = [];
    }
    shuffle() {
        this.myTable.shuffleDeck();
    }
    setPlayersCardsToSwap() {
        for (let i = 1; i < this.nrOfPlayers; ++i) {
            this.heartsService.select3CardToSwap(this.myTable.getPlayer(i));
        }
    }
    askPlayerToSelect3CardsToSwap() {
        this.allMessage = {
            type: 'info',
            msg: 'MY_CARDS_PANEL.MESSAGES.CHOOSE_3_CARD_TO_SWAP',
            subMsg: ' ',
            translateParams: {}
        };
    }
    select3CardToSwap() {
        this.endOf3CardsSelection = false;
        this.setPlayersCardsToSwap();
        this.askPlayerToSelect3CardsToSwap();
    }
    toggleSelectedCard(card) {
        const selectedCardImg = this.element.nativeElement.querySelector(`#my-card-${card.printCard()}`);
        selectedCardImg.classList.toggle('lifted');
    }
    handleRound() {
        // ha pont annyi kártya van lent ahány játékos, akkor ebben a körben mindenki letette a lapját
        if (this.myTable.nrOfCardsOnTable() === this.nrOfPlayers) {
            const starterIdx = (this.playerIdx + 1) % this.nrOfPlayers;
            this.showTableCards();
            // aki viszi a kört, az lesz a kezdő
            this.playerIdx = this.myTable.findTurnTaker();
            this.myTable.getPlayer(this.playerIdx).addReal(this.myTable.getCardPoints());
            this.addToHistory(true, starterIdx);
            this.myTable.removeCardsFromTable();
            this.myTable.setStarterAndLastPlayer(this.playerIdx);
            this.lastPlayerIdx = this.myTable.getLastPlayer();
        }
        else {
            ++this.playerIdx;
            this.playerIdx %= this.nrOfPlayers;
        }
    }
    setPlayersTurn() {
        while (this.playerIdx !== 0 && this.myTable.getPlayer(this.lastPlayerIdx).hasCard()) {
            // ha a játékosnak több kártyája van
            if (this.myTable.getPlayer(this.playerIdx).getCards().length > 1) {
                const selectedCard = this.heartsService.selectCardAI(this.myTable, this.playerIdx);
                console.log(this.myTable, this.playerIdx, selectedCard);
                this.myTable.getPlayer(this.playerIdx).removeCard(selectedCard);
                this.myTable.putCardOnTable(this.playerIdx, selectedCard);
            }
            else {
                // ha a játékosnak csak egy kártyája maradt, akkor azt azonnal leteszi
                this.myTable.putCardOnTable(this.playerIdx, this.myTable.getPlayer(this.playerIdx).removeCardByIdx(0) // TODO: removeLastCard()
                );
            }
            this.handleRound();
        }
    }
    askPlayerToSelectCard() {
        this.allMessage = {
            type: 'info',
            msg: 'MY_CARDS_PANEL.MESSAGES.CHOOSE_CARD',
            subMsg: ' ',
            translateParams: {}
        };
    }
    playTurn() {
        this.endOfSelection = false;
        this.lastPlayerIdx = this.myTable.getLastPlayer();
        for (let i = 1; i < this.nrOfPlayers; i++) {
            const player = this.myTable.getPlayer(i);
            const playerCards = Object(lodash_es__WEBPACK_IMPORTED_MODULE_8__["cloneDeep"])(player.getSortedCards());
            console.log(player.getName(), playerCards);
        }
        if (this.playerIdx !== 0) {
            this.setPlayersTurn();
        }
        this.showTableCards();
        this.askPlayerToSelectCard();
    }
    setStarterAndPlayTurn() {
        // kezdő kiválasztása
        let hasPlayerClub2 = false;
        for (let i = 0; !hasPlayerClub2 && i < this.nrOfPlayers; i++) {
            const player = this.myTable.getPlayer(i);
            hasPlayerClub2 = !!player.getSortedCards().clubs.filter((card) => card.getRank() === 2).length;
            if (hasPlayerClub2) {
                player.setStarter(true);
                this.playerIdx = i;
            }
        }
        this.myTable.setStarterAndLastPlayer(this.playerIdx);
        this.playTurn();
    }
    showTableCards() {
        var _a, _b;
        const cardsOnTable = this.myTable.checkCardSlotsOnTable();
        for (let i = 0; i < this.nrOfPlayers; i++) {
            if (i === 0) {
                this.myCardUrl = ((_a = cardsOnTable[0]) === null || _a === void 0 ? void 0 : _a.getSuit()) ? this.convertCardToImgUrl(cardsOnTable[0])
                    : this.placeholderCardImgUrl;
            }
            else {
                this.cardUrls[i] = ((_b = cardsOnTable[i]) === null || _b === void 0 ? void 0 : _b.getSuit()) ? this.convertCardToImgUrl(cardsOnTable[i])
                    : this.placeholderCardImgUrl;
            }
        }
    }
    addToHistory(isCardRow = false, starterIdx = 0) {
        const trunStarter = this.myTable.getPlayer(starterIdx);
        let cardUrls = [];
        if (isCardRow) {
            cardUrls = Object(lodash_es__WEBPACK_IMPORTED_MODULE_8__["cloneDeep"])(this.cardUrls);
            cardUrls.splice(0, 1, this.convertCardToImgUrl(this.myTable.checkCardSlotsOnTable()[0]));
        }
        this.history.push({
            isCardRow,
            cardRow: isCardRow
                ? {
                    turnPerRound: `${13 - trunStarter.getSortedCardsLength()}/${this.round}`,
                    trunStarter: trunStarter.getName(),
                    cardUrls: cardUrls,
                    turnTaker: this.myTable.getPlayer(this.playerIdx).getName(),
                }
                : {},
            scoreRow: isCardRow
                ? {}
                : {
                    players: Object(lodash_es__WEBPACK_IMPORTED_MODULE_8__["cloneDeep"])(this.myTable.getPlayers())
                }
        });
    }
    setScore() {
        // pont számlálók beállítása
        let hotTrickByPlayerIdx = -1;
        for (let i = 0; i < this.nrOfPlayers; ++i) {
            const player = this.myTable.getPlayer(i);
            if (player.getReal() === 26) {
                hotTrickByPlayerIdx = i;
            }
        }
        if (hotTrickByPlayerIdx === -1) {
            for (let i = 0; i < this.nrOfPlayers; ++i) {
                const player = this.myTable.getPlayer(i);
                player.setScore();
            }
        }
        else {
            for (let i = 0; i < this.nrOfPlayers; ++i) {
                const player = this.myTable.getPlayer(i);
                player.resetReal();
                if (hotTrickByPlayerIdx !== i) {
                    player.addReal(26);
                }
                player.setScore();
            }
        }
    }
    findWinner() {
        const players = this.myTable.getPlayers();
        let winnerIdx = 0;
        let winner = players[winnerIdx];
        for (let i = 1; i < players.length; i++) {
            if (players[i].getScore() < winner.getScore()) {
                winner = players[i];
                winnerIdx = i;
            }
        }
        this.allMessage = winnerIdx === 0
            ? {
                type: 'info',
                msg: 'MY_CARDS_PANEL.MESSAGES.YOU_WON',
                subMsg: ' ',
                translateParams: {}
            }
            : {
                type: 'info',
                msg: 'MY_CARDS_PANEL.MESSAGES.ANOTHER_WON',
                subMsg: ' ',
                translateParams: { winner: winner.getName() }
            };
    }
};
HeartsComponent.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"] },
    { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__["TranslateService"] },
    { type: _hearts_service__WEBPACK_IMPORTED_MODULE_5__["HeartsService"] }
];
HeartsComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-hearts',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./hearts.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/games/hearts/hearts.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./hearts.component.scss */ "./src/app/games/hearts/hearts.component.scss")).default]
    })
], HeartsComponent);



/***/ }),

/***/ "./src/app/games/hearts/hearts.service.ts":
/*!************************************************!*\
  !*** ./src/app/games/hearts/hearts.service.ts ***!
  \************************************************/
/*! exports provided: HeartsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeartsService", function() { return HeartsService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var src_app_table_parts_card_cards__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/table-parts/card/cards */ "./src/app/table-parts/card/cards.ts");
/* harmony import */ var src_app_table_parts_suit_suit__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/table-parts/suit/suit */ "./src/app/table-parts/suit/suit.ts");
/* harmony import */ var src_app_table_parts_suit_suits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/table-parts/suit/suits */ "./src/app/table-parts/suit/suits.ts");





let HeartsService = class HeartsService {
    constructor() {
        this.suitSwapPriority = [src_app_table_parts_suit_suits__WEBPACK_IMPORTED_MODULE_4__["suits"][2], src_app_table_parts_suit_suits__WEBPACK_IMPORTED_MODULE_4__["suits"][0], src_app_table_parts_suit_suits__WEBPACK_IMPORTED_MODULE_4__["suits"][1], src_app_table_parts_suit_suits__WEBPACK_IMPORTED_MODULE_4__["suits"][3]];
        this.throwOutPriority = [src_app_table_parts_suit_suits__WEBPACK_IMPORTED_MODULE_4__["suits"][2], src_app_table_parts_suit_suits__WEBPACK_IMPORTED_MODULE_4__["suits"][3], src_app_table_parts_suit_suits__WEBPACK_IMPORTED_MODULE_4__["suits"][1], src_app_table_parts_suit_suits__WEBPACK_IMPORTED_MODULE_4__["suits"][0]];
    }
    moveToSwap(player, cardToSwap) {
        player.removeCard(cardToSwap);
        player.addCardToSwap(cardToSwap);
    }
    select3CardToSwap(player) {
        const playerCards = player.getSortedCards();
        const takeAllStrategy = this.chooseTakeAllStrategy(playerCards);
        if (takeAllStrategy) {
            player.setStartegyTakeAll(true);
            this.chooseLowCardsToSwap(player, playerCards);
        }
        else {
            this.chooseHighCardsToSwap(player, playerCards);
        }
    }
    selectCardAI(myTable, playerIdx) {
        const players = myTable.getPlayers();
        const cardsOnTable = myTable.checkCardsOnTable();
        const pointCardsOnTable = cardsOnTable.filter((card) => {
            return card.getSuit() === src_app_table_parts_suit_suit__WEBPACK_IMPORTED_MODULE_3__["Suit"].HEART || Object(src_app_table_parts_card_cards__WEBPACK_IMPORTED_MODULE_2__["isSpecificCard"])(card, src_app_table_parts_card_cards__WEBPACK_IMPORTED_MODULE_2__["spadeQueen"]);
        });
        const player = myTable.getPlayer(playerIdx);
        const playerCards = player.getSortedCards();
        const clubs = playerCards.clubs;
        const clubsLength = playerCards.clubs.length;
        const diamonds = playerCards.diamonds;
        const diamondsLength = playerCards.diamonds.length;
        const spades = playerCards.spades;
        const spadesLength = playerCards.spades.length;
        const hearts = playerCards.hearts;
        const heartsLength = playerCards.hearts.length;
        const sortedCardsLength = player.getSortedCardsLength();
        const hasSpadeQueen = spadesLength ? Object(src_app_table_parts_card_cards__WEBPACK_IMPORTED_MODULE_2__["isSpecificCardIncluded"])(spades, src_app_table_parts_card_cards__WEBPACK_IMPORTED_MODULE_2__["spadeQueen"]) : false;
        const haveOthersPoints = this.checkOthersPoints(players, playerIdx);
        const isStrategyTakeAll = this.checkStartegyTakeAll(player, haveOthersPoints);
        let selectedCard = src_app_table_parts_card_cards__WEBPACK_IMPORTED_MODULE_2__["nullCard"];
        // ha első kör van
        if (sortedCardsLength === 13) {
            if (player.isStarter()) {
                selectedCard = src_app_table_parts_card_cards__WEBPACK_IMPORTED_MODULE_2__["clubTwo"];
            }
            else {
                // ha van treff
                if (clubsLength) {
                    selectedCard = isStrategyTakeAll ? clubs[0] : clubs[clubsLength - 1];
                    // ha mindent vinni akar
                }
                else if (isStrategyTakeAll) {
                    // ha van káró és pikkből kisebb mint pikk Q válassza a legkisebb kárót vagy pikket
                    if (diamondsLength && spadesLength && spades[0].getRank() < src_app_table_parts_card_cards__WEBPACK_IMPORTED_MODULE_2__["spadeQueen"].getRank()) {
                        const firstDiamond = diamonds[0];
                        const firstSpade = spades[0];
                        selectedCard = firstDiamond.getRank() <= firstSpade.getRank()
                            ? firstDiamond
                            : firstSpade;
                        // ha van káró válassza a legkisebbet
                    }
                    else if (diamondsLength) {
                        selectedCard = diamonds[0];
                        // ha csak pikk van válassza a legkisebbet a pikk Q-án kívül vagy ha csak a pikk Q van akkor azt
                    }
                    else if (spadesLength) {
                        const lastSpade = spades[0];
                        selectedCard = Object(src_app_table_parts_card_cards__WEBPACK_IMPORTED_MODULE_2__["isSpecificCard"])(selectedCard, lastSpade)
                            ? spadesLength > 1
                                ? spades[1]
                                : lastSpade
                            : lastSpade;
                        // ha csak szív van akkor a legnagyobbat (alig van esély erre az esetre és itt biztosan nem is fog vinni semmit)
                    }
                    else {
                        selectedCard = hearts[heartsLength - 1];
                    }
                    // ha nincs treff és nem akar mindent vinni
                }
                else {
                    const lastSpade = spadesLength ? spades[spadesLength - 1] : src_app_table_parts_card_cards__WEBPACK_IMPORTED_MODULE_2__["nullCard"];
                    const isSpadeObligatory = !diamondsLength && lastSpade.getRank() > 0;
                    // ha kötelező pikket tenni (nincs káró) válassza a legnagyobbat, vagy ha van nála nagyobb, mint pikk Q
                    if (isSpadeObligatory || (!hasSpadeQueen && lastSpade.getRank() > src_app_table_parts_card_cards__WEBPACK_IMPORTED_MODULE_2__["spadeQueen"].getRank())) {
                        selectedCard = Object(src_app_table_parts_card_cards__WEBPACK_IMPORTED_MODULE_2__["isSpecificCard"])(selectedCard, lastSpade)
                            ? spadesLength > 1
                                ? spades[spadesLength - 2]
                                : lastSpade
                            : lastSpade;
                        // ha van káró válassza a legnagyobbat
                    }
                    else if (diamondsLength) {
                        selectedCard = diamonds[diamondsLength - 1];
                        // ha csak szív van akkor a legnagyobbat (alig van esély erre az esetre és itt biztosan nem is fog vinni semmit)
                    }
                    else {
                        selectedCard = hearts[heartsLength - 1];
                    }
                }
            }
            // ha nem az első kör van
        }
        else {
            let firstCard = src_app_table_parts_card_cards__WEBPACK_IMPORTED_MODULE_2__["nullCard"];
            let openSuit = '';
            let suitsFromOpenSuit = [];
            let lastCardFromOpenSuit = src_app_table_parts_card_cards__WEBPACK_IMPORTED_MODULE_2__["nullCard"];
            let suitsOnTable = [];
            // az asztalon lévő legnagyobb kártya értéke az adott színben
            let highestCardRankOnTable = 0;
            if (!myTable.isTableEmpty()) {
                firstCard = myTable.getFirstCard();
                openSuit = src_app_table_parts_suit_suits__WEBPACK_IMPORTED_MODULE_4__["suits"][firstCard.getSuit() - 1];
                suitsFromOpenSuit = playerCards[openSuit];
                lastCardFromOpenSuit = suitsFromOpenSuit[suitsFromOpenSuit.length - 1];
                suitsOnTable = cardsOnTable.filter((card) => card.getSuit() === firstCard.getSuit())
                    .sort((a, b) => (a.getRank() > b.getRank()) ? 1 : -1);
                highestCardRankOnTable = suitsOnTable[suitsOnTable.length - 1].getRank();
            }
            // ha mindent akar vinni
            if (isStrategyTakeAll) {
                // ha a játékos kezdő
                if (player.isStarter()) {
                    if (hasSpadeQueen) {
                        selectedCard = src_app_table_parts_card_cards__WEBPACK_IMPORTED_MODULE_2__["spadeQueen"];
                    }
                    else {
                        selectedCard = player.findHighestCardInSortedCards([src_app_table_parts_suit_suit__WEBPACK_IMPORTED_MODULE_3__["Suit"].CLUB, src_app_table_parts_suit_suit__WEBPACK_IMPORTED_MODULE_3__["Suit"].DIAMOND, src_app_table_parts_suit_suit__WEBPACK_IMPORTED_MODULE_3__["Suit"].HEART, src_app_table_parts_suit_suit__WEBPACK_IMPORTED_MODULE_3__["Suit"].SPADE]);
                        /* if (heartsLength) {
                          selectedCard = hearts[heartsLength - 1];
                        } else {
                          selectedCard = player.findHighestCardInSortedCards([Suit.CLUB, Suit.DIAMOND, Suit.SPADE]);
                        } */
                    }
                    // ha a játékos nem kezdő
                }
                else {
                    // ha van a nyitó színben lapja
                    if (suitsFromOpenSuit.length) {
                        if (player.isLast()) {
                            selectedCard = this.findHigherThanOpenSuitCard(suitsFromOpenSuit, lastCardFromOpenSuit, highestCardRankOnTable);
                        }
                        else {
                            selectedCard = lastCardFromOpenSuit;
                        }
                        // ha nincs a nyitó színben lapja
                    }
                    else {
                        if (pointCardsOnTable && (hasSpadeQueen || heartsLength)) {
                            selectedCard = hasSpadeQueen
                                ? src_app_table_parts_card_cards__WEBPACK_IMPORTED_MODULE_2__["spadeQueen"]
                                : hearts[heartsLength - 1];
                            player.setStartegyTakeAll(false);
                        }
                        else {
                            if (clubsLength || diamondsLength) {
                                selectedCard = player.findLowestCardInSortedCards([src_app_table_parts_suit_suit__WEBPACK_IMPORTED_MODULE_3__["Suit"].CLUB, src_app_table_parts_suit_suit__WEBPACK_IMPORTED_MODULE_3__["Suit"].DIAMOND]);
                            }
                            else if (spadesLength) {
                                selectedCard = player.findLowestCardInSortedCards([src_app_table_parts_suit_suit__WEBPACK_IMPORTED_MODULE_3__["Suit"].SPADE]);
                                if (Object(src_app_table_parts_card_cards__WEBPACK_IMPORTED_MODULE_2__["isSpecificCard"])(selectedCard, src_app_table_parts_card_cards__WEBPACK_IMPORTED_MODULE_2__["spadeQueen"])) {
                                    player.setStartegyTakeAll(false);
                                }
                            }
                            else {
                                selectedCard = hearts[heartsLength - 1];
                                player.setStartegyTakeAll(false);
                            }
                        }
                    }
                }
                // ha nem akar mindent vinni
            }
            else {
                // ha nála van a pikk Q
                if (hasSpadeQueen) {
                    // ha a játékos kezdő
                    if (player.isStarter()) {
                        if (spadesLength !== sortedCardsLength) {
                            if (!myTable.isHeartsBroken()) {
                                // ha van pikken kívüli színe, akkor nyisson a legkisebb értékű lapjával
                                if (clubsLength || diamondsLength) {
                                    selectedCard = player.findLowestCardInSortedCards([src_app_table_parts_suit_suit__WEBPACK_IMPORTED_MODULE_3__["Suit"].CLUB, src_app_table_parts_suit_suit__WEBPACK_IMPORTED_MODULE_3__["Suit"].DIAMOND]);
                                    // ha csak pikk és szívszínű kártyák maradtak
                                }
                                else if (spadesLength > 1) {
                                    selectedCard = Object(src_app_table_parts_card_cards__WEBPACK_IMPORTED_MODULE_2__["isSpecificCard"])(spades[0], src_app_table_parts_card_cards__WEBPACK_IMPORTED_MODULE_2__["spadeQueen"])
                                        ? spades[1]
                                        : spades[0];
                                }
                                else if (spadesLength === 1) {
                                    selectedCard = src_app_table_parts_card_cards__WEBPACK_IMPORTED_MODULE_2__["spadeQueen"];
                                }
                                else {
                                    selectedCard = hearts[0];
                                }
                            }
                            else {
                                selectedCard = player.findLowestCardInSortedCards([src_app_table_parts_suit_suit__WEBPACK_IMPORTED_MODULE_3__["Suit"].CLUB, src_app_table_parts_suit_suit__WEBPACK_IMPORTED_MODULE_3__["Suit"].DIAMOND, src_app_table_parts_suit_suit__WEBPACK_IMPORTED_MODULE_3__["Suit"].HEART]);
                            }
                        }
                        else {
                            selectedCard = spadesLength > 1 && Object(src_app_table_parts_card_cards__WEBPACK_IMPORTED_MODULE_2__["isSpecificCard"])(spades[0], src_app_table_parts_card_cards__WEBPACK_IMPORTED_MODULE_2__["spadeQueen"])
                                ? spades[1]
                                : spades[0];
                        }
                        // ha a játékos nem kezdő
                    }
                    else {
                        // ha nincs a nyitó színben lapja és nem pikk a kezdő szín
                        // vagy a pikk K,A ki lett játszva,
                        // vagy pikk a kezdő szín és csak pikk Q van nála, akkor pikk Q-t tesz
                        if (!suitsFromOpenSuit.length
                            || Object(src_app_table_parts_card_cards__WEBPACK_IMPORTED_MODULE_2__["isSpecificCardIncluded"])(cardsOnTable, src_app_table_parts_card_cards__WEBPACK_IMPORTED_MODULE_2__["spadeAce"])
                            || Object(src_app_table_parts_card_cards__WEBPACK_IMPORTED_MODULE_2__["isSpecificCardIncluded"])(cardsOnTable, src_app_table_parts_card_cards__WEBPACK_IMPORTED_MODULE_2__["spadeKing"])
                            || firstCard.getSuit() === src_app_table_parts_suit_suit__WEBPACK_IMPORTED_MODULE_3__["Suit"].SPADE && spadesLength === 1) {
                            selectedCard = src_app_table_parts_card_cards__WEBPACK_IMPORTED_MODULE_2__["spadeQueen"];
                            // ha pikk a kezdő szín és minimum kettő van,
                            // és van benne pont, válassza azasztalon lévő legnagyobbtól számított első kisebbet (de ne a pikk Q-t)
                            // vagy nincs benne pont és válassza a legnagyobbat (de ne a pikk Q-t),
                        }
                        else if (firstCard.getSuit() === src_app_table_parts_suit_suit__WEBPACK_IMPORTED_MODULE_3__["Suit"].SPADE && spadesLength > 1) {
                            selectedCard = pointCardsOnTable.length
                                ? this.findLowerThanOpenSuitCard(suitsFromOpenSuit, lastCardFromOpenSuit, highestCardRankOnTable)
                                : Object(src_app_table_parts_card_cards__WEBPACK_IMPORTED_MODULE_2__["isSpecificCard"])(lastCardFromOpenSuit, src_app_table_parts_card_cards__WEBPACK_IMPORTED_MODULE_2__["spadeQueen"])
                                    ? spades[spadesLength - 2]
                                    : lastCardFromOpenSuit;
                            // ha van a nyitó színben lapja és nem pikk a kezdő szín
                        }
                        else if (suitsFromOpenSuit.length) {
                            selectedCard = this.selectOpenSuitCard(!!pointCardsOnTable.length, highestCardRankOnTable, suitsFromOpenSuit, lastCardFromOpenSuit, player.isLast());
                        }
                    }
                    // ha nincs nála a pikk Q
                }
                else {
                    // ha kezdő nyisson a legkisebbel vagy ha még nincs pikk Q akkor attól kisebb pikkel
                    if (player.isStarter()) {
                        const spadeHighs = (Object(src_app_table_parts_card_cards__WEBPACK_IMPORTED_MODULE_2__["isSpecificCardIncluded"])(spades, src_app_table_parts_card_cards__WEBPACK_IMPORTED_MODULE_2__["spadeKing"]) ? 1 : 0) + (Object(src_app_table_parts_card_cards__WEBPACK_IMPORTED_MODULE_2__["isSpecificCardIncluded"])(spades, src_app_table_parts_card_cards__WEBPACK_IMPORTED_MODULE_2__["spadeAce"]) ? 1 : 0);
                        // ha a pikk Q még nincs kijátszva és van kisebb pikkje
                        if (!myTable.isSpadeQueenOut() && ((spadesLength - spadeHighs) > 1)) {
                            selectedCard = this.findLowerThanOpenSuitCard(spades, spades[spadesLength - 1], src_app_table_parts_card_cards__WEBPACK_IMPORTED_MODULE_2__["spadeQueen"].getRank());
                            // ha a pikk Q kijátszva vagy nincs csak nagyobb pikkje, akkor nyisson a legkisebb értékű lapjával
                        }
                        else {
                            if (!myTable.isHeartsBroken()) {
                                // ha van pikken kívüli színe, akkor nyisson a legkisebb értékű lapjával
                                if (clubsLength || diamondsLength) {
                                    selectedCard = player.findLowestCardInSortedCards([src_app_table_parts_suit_suit__WEBPACK_IMPORTED_MODULE_3__["Suit"].CLUB, src_app_table_parts_suit_suit__WEBPACK_IMPORTED_MODULE_3__["Suit"].DIAMOND]);
                                    // ha csak pikk és szívszínű kártyák maradtak
                                }
                                else if (spadesLength > 1) {
                                    selectedCard = spades[0];
                                }
                                else {
                                    selectedCard = hearts[0];
                                }
                            }
                            else {
                                selectedCard = player.findLowestCardInSortedCards([src_app_table_parts_suit_suit__WEBPACK_IMPORTED_MODULE_3__["Suit"].CLUB, src_app_table_parts_suit_suit__WEBPACK_IMPORTED_MODULE_3__["Suit"].DIAMOND, src_app_table_parts_suit_suit__WEBPACK_IMPORTED_MODULE_3__["Suit"].HEART, src_app_table_parts_suit_suit__WEBPACK_IMPORTED_MODULE_3__["Suit"].SPADE]);
                            }
                        }
                        // ha a játékos nem kezdő
                    }
                    else {
                        // ha van a nyitó színben lapja
                        if (suitsFromOpenSuit.length) {
                            selectedCard = this.selectOpenSuitCard(!!pointCardsOnTable.length, highestCardRankOnTable, suitsFromOpenSuit, lastCardFromOpenSuit, player.isLast());
                            // ha nincs a nyitó színben lapja
                        }
                        else {
                            // tehet pikk K,A-t, legnagyobb szívet, legnagyobb színt
                            if (Object(src_app_table_parts_card_cards__WEBPACK_IMPORTED_MODULE_2__["isSpecificCardIncluded"])(spades, src_app_table_parts_card_cards__WEBPACK_IMPORTED_MODULE_2__["spadeAce"])) {
                                selectedCard = src_app_table_parts_card_cards__WEBPACK_IMPORTED_MODULE_2__["spadeAce"];
                            }
                            else if (Object(src_app_table_parts_card_cards__WEBPACK_IMPORTED_MODULE_2__["isSpecificCardIncluded"])(spades, src_app_table_parts_card_cards__WEBPACK_IMPORTED_MODULE_2__["spadeKing"])) {
                                selectedCard = src_app_table_parts_card_cards__WEBPACK_IMPORTED_MODULE_2__["spadeKing"];
                            }
                            else {
                                for (let i = 0; selectedCard === src_app_table_parts_card_cards__WEBPACK_IMPORTED_MODULE_2__["nullCard"] && i < this.throwOutPriority.length; i++) {
                                    const suit = this.throwOutPriority[i];
                                    const suitCards = playerCards[suit];
                                    const suitCardsLength = suitCards.length;
                                    if (suitCardsLength) {
                                        selectedCard = suitCards[suitCardsLength - 1];
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
        if (selectedCard === src_app_table_parts_card_cards__WEBPACK_IMPORTED_MODULE_2__["nullCard"]) {
            console.error(`${player.getName()} did not select any card!`);
        }
        return selectedCard;
    }
    checkOthersPoints(players, playerIdx) {
        let allOthersPointsInTurn = 0;
        for (let i = 0; i < players.length; i++) {
            if (i !== playerIdx) {
                const playerPointsInTurn = players[i].getReal();
                if (playerPointsInTurn) {
                    allOthersPointsInTurn += playerPointsInTurn;
                }
            }
        }
        return !!allOthersPointsInTurn;
    }
    checkStartegyTakeAll(player, haveOthersPoints) {
        let isStrategyTakeAll = player.isStartegyTakeAll();
        if (haveOthersPoints) {
            isStrategyTakeAll = false;
            player.setStartegyTakeAll(false);
        }
        else if (player.getReal() >= 13) {
            isStrategyTakeAll = true;
            player.setStartegyTakeAll(true);
        }
        return isStrategyTakeAll;
    }
    hasAllHeartHighCards(hearts) {
        if (hearts.length < 4) {
            return false;
        }
        // ha szívből megvan a J,Q,K,A
        return hearts[hearts.length - 1].getRank() === 14
            && hearts[hearts.length - 2].getRank() === 13
            && hearts[hearts.length - 3].getRank() === 12
            && hearts[hearts.length - 4].getRank() === 11;
    }
    // ha megvan a pikk Q és a szív J,Q,K,A, akkor próbálhat all in-re menni
    chooseTakeAllStrategy(playerCards) {
        const spades = playerCards.spades;
        const spadesLength = spades.length;
        const hasSpadeQueen = spadesLength ? Object(src_app_table_parts_card_cards__WEBPACK_IMPORTED_MODULE_2__["isSpecificCardIncluded"])(spades, src_app_table_parts_card_cards__WEBPACK_IMPORTED_MODULE_2__["spadeQueen"]) : false;
        return hasSpadeQueen
            ? this.hasAllHeartHighCards(playerCards.hearts)
            : false;
    }
    swapLowestCards(player, remainNrOfSuitsToSwap, suitsToSwap) {
        for (let i = 0; i < remainNrOfSuitsToSwap; i++) {
            const lowestCard = player.findLowestCardInSortedCards(suitsToSwap);
            this.moveToSwap(player, lowestCard);
        }
    }
    // kiválogatja a legkisebb lapokat, amiket el kell dobni
    chooseLowCardsToSwap(player, playerCards) {
        const clubsLength = playerCards.clubs.length;
        const diamondsLength = playerCards.diamonds.length;
        const spadesLength = playerCards.spades.length;
        const hearts = playerCards.hearts;
        const heartsLength = playerCards.hearts.length;
        let nrOfHeartsToSwap = 0;
        if (heartsLength < 8) {
            for (let i = 0; i < hearts.length - 3; i++) {
                if (hearts[i].getRank() < 9) {
                    nrOfHeartsToSwap += 1;
                }
            }
        }
        let remainNrOfSuitsToSwap = 3;
        if (nrOfHeartsToSwap > 0) {
            remainNrOfSuitsToSwap -= nrOfHeartsToSwap;
            this.cardsToSwapBySuit(player, hearts, nrOfHeartsToSwap, true);
        }
        // A maradék színekből a legkisebbeket
        if (remainNrOfSuitsToSwap > 0) {
            this.swapLowestCards(player, remainNrOfSuitsToSwap, [src_app_table_parts_suit_suit__WEBPACK_IMPORTED_MODULE_3__["Suit"].CLUB, src_app_table_parts_suit_suit__WEBPACK_IMPORTED_MODULE_3__["Suit"].DIAMOND, src_app_table_parts_suit_suit__WEBPACK_IMPORTED_MODULE_3__["Suit"].SPADE]);
        }
        // ha a maradék három színből nem lenne meg a maradék cserélendő pl.: maradék 3, szíven kívüli színek 2
        const lastNrOfSuitsToSwap = remainNrOfSuitsToSwap - clubsLength - diamondsLength - spadesLength;
        if (lastNrOfSuitsToSwap > 0) {
            this.swapLowestCards(player, lastNrOfSuitsToSwap, [src_app_table_parts_suit_suit__WEBPACK_IMPORTED_MODULE_3__["Suit"].HEART]);
        }
    }
    highCardsToThrow(cardsBySuit, cardRanksToHold) {
        const cardsLength = cardsBySuit.length;
        let cardsToHold = 0;
        for (let i = 0; i < cardsLength && i < 3; i++) {
            const cardRank = cardsBySuit[i].getRank();
            if (cardRanksToHold.includes(cardRank)) {
                cardsToHold += 1;
            }
        }
        return cardsLength - cardsToHold;
    }
    cardsToSwapBySuit(player, cardsBySuit, nrOfSuitsToSwap, low) {
        let i = low ? 0 : cardsBySuit.length - 1;
        for (i; low ? i < nrOfSuitsToSwap : i >= (cardsBySuit.length - nrOfSuitsToSwap); low ? i++ : i--) {
            const cardToSwap = cardsBySuit[i];
            this.moveToSwap(player, cardToSwap);
        }
    }
    swapRemainNrOfSuits(player, sortedPlayerCards, suitsToSwap, remainNrOfSuits) {
        let remainToSwap = remainNrOfSuits;
        for (let i = 0; remainToSwap > 0 && i < suitsToSwap.length; i++) {
            const suit = suitsToSwap[i];
            const suitCards = sortedPlayerCards[suit];
            const suitCardsLength = suitCards.length;
            const cardsToHold = [2, 3];
            const highCardsToThrow = this.highCardsToThrow(suitCards, cardsToHold);
            if (highCardsToThrow
                && (suit !== src_app_table_parts_suit_suits__WEBPACK_IMPORTED_MODULE_4__["suits"][2]
                    || (suit === src_app_table_parts_suit_suits__WEBPACK_IMPORTED_MODULE_4__["suits"][2] && (suitCardsLength <= 5 || suitCardsLength >= 11)))) {
                const nrOfSuitToSwap = highCardsToThrow >= remainNrOfSuits
                    ? remainNrOfSuits
                    : highCardsToThrow;
                this.cardsToSwapBySuit(player, suitCards, nrOfSuitToSwap, false);
                remainToSwap -= nrOfSuitToSwap;
            }
        }
        if (remainToSwap > 0) {
            this.swapRemainNrOfSuits(player, sortedPlayerCards, this.suitSwapPriority, remainToSwap);
        }
    }
    swapNrOfSuits(player, sortedPlayerCards, suitsFromRemove, highCardsToThrow) {
        let swappedNrOfSuits = 0;
        if (suitsFromRemove.length) {
            for (let i = 0; i < this.suitSwapPriority.length; i++) {
                if (swappedNrOfSuits < 3) {
                    const suitToSwap = this.suitSwapPriority[i];
                    let nrOfSuitsToSwap = 3 - swappedNrOfSuits;
                    if (suitsFromRemove.includes(suitToSwap)) {
                        const nrOfSuit = highCardsToThrow[suitToSwap];
                        nrOfSuitsToSwap = nrOfSuitsToSwap >= nrOfSuit
                            ? nrOfSuit
                            : nrOfSuitsToSwap;
                        this.cardsToSwapBySuit(player, sortedPlayerCards[suitToSwap], nrOfSuitsToSwap, false);
                        swappedNrOfSuits += nrOfSuitsToSwap;
                    }
                }
            }
        }
        if (swappedNrOfSuits < 3) {
            const remainNrOfSuits = 3 - swappedNrOfSuits;
            const suitsToSwap = this.suitSwapPriority.filter(suit => !suitsFromRemove.includes(suit));
            this.swapRemainNrOfSuits(player, sortedPlayerCards, suitsToSwap, remainNrOfSuits);
        }
    }
    // ha egy színből van 3 vagy kevesebb azt cserélje szín prioritás szerint, a 2,3,4-es kártyákat tartsa meg
    chooseHighCardsToSwap(player, sortedPlayerCards) {
        const cardsToHold = [2, 3, 4];
        const highCardsToThrow = {
            clubs: this.highCardsToThrow(sortedPlayerCards.clubs, cardsToHold),
            diamonds: this.highCardsToThrow(sortedPlayerCards.diamonds, cardsToHold),
            hearts: this.highCardsToThrow(sortedPlayerCards.hearts, cardsToHold),
            spades: this.highCardsToThrow(sortedPlayerCards.spades, cardsToHold),
        };
        const suitsFromRemove = [];
        Object.keys(highCardsToThrow).forEach(suit => {
            if (highCardsToThrow[suit] && highCardsToThrow[suit] <= 3) {
                suitsFromRemove.push(suit);
            }
        });
        this.swapNrOfSuits(player, sortedPlayerCards, suitsFromRemove, highCardsToThrow);
    }
    findHigherThanOpenSuitCard(suitsFromOpenSuit, lastCardFromOpenSuit, highestCardRankOnTable) {
        let selectedCard = suitsFromOpenSuit[0];
        if (suitsFromOpenSuit.length > 1 && lastCardFromOpenSuit.getRank() > highestCardRankOnTable) {
            selectedCard = lastCardFromOpenSuit;
            for (let i = suitsFromOpenSuit.length - 1; i >= 0; i--) {
                const nextCard = suitsFromOpenSuit[i];
                if (nextCard.getRank() > highestCardRankOnTable) {
                    selectedCard = nextCard;
                }
            }
        }
        return selectedCard;
    }
    findLowerThanOpenSuitCard(suitsFromOpenSuit, lastCardFromOpenSuit, highestCardRankOnTable) {
        let selectedCard = lastCardFromOpenSuit;
        if (lastCardFromOpenSuit.getRank() > highestCardRankOnTable) {
            let lowerRankFound = false;
            for (let i = suitsFromOpenSuit.length - 1; !lowerRankFound && i >= 0; i--) {
                const nextCard = suitsFromOpenSuit[i];
                if (nextCard.getRank() < highestCardRankOnTable || i === 0) {
                    selectedCard = nextCard;
                    lowerRankFound = true;
                }
            }
        }
        return selectedCard;
    }
    selectOpenSuitCard(hasPointCardsOnTable, highestCardRankOnTable, suitsFromOpenSuit, lastCardFromOpenSuit, isLast) {
        let selectedCard = src_app_table_parts_card_cards__WEBPACK_IMPORTED_MODULE_2__["nullCard"];
        // ha a játékos utolsó
        // és van az asztalon pontot érő kártya próbáljon kisebbet tenni, ha nem tud a legnagyobbat
        // vagy nincs az asztalon pontot érő kártya és a legnagyobbat teszi
        if (isLast) {
            selectedCard = hasPointCardsOnTable
                ? this.findLowerThanOpenSuitCard(suitsFromOpenSuit, lastCardFromOpenSuit, highestCardRankOnTable)
                : lastCardFromOpenSuit;
            // ha a játékos nem utolsó
        }
        else {
            // tegye a kintlévőknél kisebbet, ha tudja, ha nem a legnagyobbat
            selectedCard = this.findLowerThanOpenSuitCard(suitsFromOpenSuit, lastCardFromOpenSuit, highestCardRankOnTable);
        }
        return selectedCard;
    }
};
HeartsService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
], HeartsService);



/***/ }),

/***/ "./src/app/games/rikiki/rikiki.component.scss":
/*!****************************************************!*\
  !*** ./src/app/games/rikiki/rikiki.component.scss ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".rikiki-container {\n  background-color: black;\n}\n.rikiki-container__settings-panel {\n  width: 468px;\n  margin: 200px auto;\n  background-color: var(--primary-lighter-color);\n}\n.rikiki-container__settings-panel_row {\n  width: 100%;\n  height: 48px;\n}\n.rikiki-container__settings-panel_row .player-name {\n  width: 108px;\n  background-color: var(--primary-lighter-color);\n  outline: none;\n}\n.rikiki-container__play-ground .card-table-panel,\n.rikiki-container__play-ground .my-cards-panel {\n  margin: 0 auto;\n  min-width: calc((1024 - 2 * 16) * 1px);\n  max-width: calc((1024 - 2 * 16) * 1px);\n}\n.rikiki-container__play-ground .control-panel {\n  margin: 0 auto;\n  min-width: 820px;\n  max-width: 820px;\n}\n.rikiki-container__play-ground .score-board {\n  margin: 0 auto;\n  min-width: 400px;\n  max-width: 400px;\n}\n.rikiki-container__play-ground .card-table-panel {\n  background-color: var(--table-green);\n  border-top-left-radius: 100px;\n  border-top-right-radius: 100px;\n  border-bottom-left-radius: 0;\n  border-bottom-right-radius: 0;\n  min-height: 356px;\n  max-height: 356px;\n  padding: 16px 16px 0px 16px;\n}\n.rikiki-container__play-ground .card-table-panel_first-half {\n  flex: 0 1 10%;\n}\n.rikiki-container__play-ground .card-table-panel_second-half {\n  flex: 0 1 90%;\n}\n.rikiki-container__play-ground .my-cards-panel {\n  background-color: var(--table-green);\n  border-top-left-radius: 0;\n  border-top-right-radius: 0;\n  border-bottom-left-radius: 100px;\n  border-bottom-right-radius: 100px;\n  min-height: 240px;\n  max-height: 240px;\n  padding: 0px 16px 16px 16px;\n}\n.rikiki-container__play-ground .my-cards-panel__first-half {\n  flex: 0 1 10%;\n}\n.rikiki-container__play-ground .my-cards-panel__second-half {\n  flex: 0 1 90%;\n}\n.rikiki-container__play-ground .my-cards-panel__second-half_my-cards .margin-left-1 {\n  margin-left: 1rem;\n}\n.rikiki-container__play-ground .my-cards-panel__second-half_my-cards .my-card-in-hand:hover {\n  cursor: pointer;\n}\n.rikiki-container__play-ground .my-cards-panel__second-half_info {\n  min-height: 40px;\n}\n.rikiki-container__play-ground .control-panel {\n  padding: 0px 16px;\n}\n.rikiki-container__play-ground .control-panel_first-half {\n  flex: 0 1 75%;\n}\n.rikiki-container__play-ground .control-panel_second-half {\n  flex: auto;\n}\n.rikiki-container__play-ground .control-panel,\n.rikiki-container__play-ground .score-board {\n  background-color: var(--primary-lighter-color);\n}\n.rikiki-container__play-ground .card-table-other-players {\n  flex: 0 1 calc(100% - 96px);\n}\n.rikiki-container__play-ground .card-table-other-players div:nth-child(1) {\n  display: none;\n}\n.rikiki-container__play-ground .card-table-other-players div:nth-child(2) {\n  margin-left: 3rem;\n}\n.rikiki-container__play-ground .mat-slider-horizontal {\n  min-width: 100px;\n}\n.rikiki-container__play-ground .card-size {\n  width: 80px;\n}\n.rikiki-container__play-ground .my-card {\n  flex: 0 1 calc(100% - 96px);\n}\n.rikiki-container__play-ground .score-board-header,\n.rikiki-container__play-ground .score-board-row {\n  border-bottom-width: 1px;\n  border-bottom-style: solid;\n  border-color: rgba(0, 0, 0, 0.12);\n}\n.rikiki-container__play-ground .score-board-header div:nth-child(n+2),\n.rikiki-container__play-ground .score-board-row div:nth-child(n+2) {\n  border-left-width: 1px;\n  border-left-style: solid;\n  border-color: rgba(0, 0, 0, 0.12);\n}\n.rikiki-container__play-ground .score-board-header div {\n  height: 36px;\n}\n.rikiki-container__play-ground .score-board-header div,\n.rikiki-container__play-ground .score-board-row div {\n  width: 80px;\n  padding: 4px 8px;\n  text-align: center;\n}\n.rikiki-container__history {\n  margin: 0 auto;\n  min-width: calc((1024 - 2 * 16) * 1px);\n  max-width: calc((1024 - 2 * 16) * 1px);\n  background-color: var(--primary-lighter-color);\n}\n.rikiki-container__history .history-score-board-header-name {\n  height: 36px;\n}\n.rikiki-container__history .history-score-board-header,\n.rikiki-container__history .history-score-board-row {\n  border-bottom-width: 1px;\n  border-bottom-style: solid;\n  border-color: rgba(0, 0, 0, 0.12);\n}\n.rikiki-container__history .history-score-board-header div:nth-child(n+2).history-score-board-col,\n.rikiki-container__history .history-score-board-row div:nth-child(n+2).history-score-board-col {\n  border-left-width: 1px;\n  border-left-style: solid;\n  border-color: rgba(0, 0, 0, 0.12);\n}\n.rikiki-container__history .history-score-board-col {\n  width: 60px;\n  padding: 4px 8px;\n}\n.rikiki-container__history .history-score-board-col-height {\n  height: 56px;\n}\n.rikiki-container__history .history-card-size {\n  width: 40px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZ2FtZXMvcmlraWtpL0M6XFxnaXRcXGNhcmQtZ2FtZXMvc3JjXFxhcHBcXGdhbWVzXFxyaWtpa2lcXHJpa2lraS5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvZ2FtZXMvcmlraWtpL3Jpa2lraS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFJQTtFQUNJLHVCQUFBO0FDSEo7QURLSTtFQUNJLFlBQUE7RUFDQSxrQkFBQTtFQUNBLDhDQUFBO0FDSFI7QURLUTtFQUNJLFdBQUE7RUFDQSxZQUFBO0FDSFo7QURLWTtFQUNJLFlBQUE7RUFDQSw4Q0FBQTtFQUNBLGFBQUE7QUNIaEI7QURTUTs7RUFFSSxjQUFBO0VBQ0Esc0NBMUJNO0VBMkJOLHNDQTNCTTtBQ29CbEI7QURVUTtFQUNJLGNBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0FDUlo7QURXUTtFQUNJLGNBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0FDVFo7QURZUTtFQUNJLG9DQUFBO0VBQ0EsNkJBQUE7RUFDQSw4QkFBQTtFQUNBLDRCQUFBO0VBQ0EsNkJBQUE7RUFDQSxpQkFBQTtFQUNBLGlCQUFBO0VBQ0EsMkJBQUE7QUNWWjtBRFlZO0VBQ0ksYUFBQTtBQ1ZoQjtBRFlZO0VBQ0ksYUFBQTtBQ1ZoQjtBRGVRO0VBQ0ksb0NBQUE7RUFDQSx5QkFBQTtFQUNBLDBCQUFBO0VBQ0EsZ0NBQUE7RUFDQSxpQ0FBQTtFQUNBLGlCQUFBO0VBQ0EsaUJBQUE7RUFDQSwyQkFBQTtBQ2JaO0FEZVk7RUFDSSxhQUFBO0FDYmhCO0FEZVk7RUFDSSxhQUFBO0FDYmhCO0FEZ0JvQjtFQUNJLGlCQUFBO0FDZHhCO0FEaUJ3QjtFQUNJLGVBQUE7QUNmNUI7QURvQmdCO0VBQ0ksZ0JBQUE7QUNsQnBCO0FEd0JRO0VBQ0ksaUJBQUE7QUN0Qlo7QUR3Qlk7RUFDSSxhQUFBO0FDdEJoQjtBRHdCWTtFQUNJLFVBQUE7QUN0QmhCO0FEMEJROztFQUVJLDhDQUFBO0FDeEJaO0FENEJRO0VBQ0ksMkJBQUE7QUMxQlo7QUQyQlk7RUFDSSxhQUFBO0FDekJoQjtBRDJCWTtFQUNJLGlCQUFBO0FDekJoQjtBRDZCUTtFQUNJLGdCQUFBO0FDM0JaO0FEOEJRO0VBQ0ksV0FBQTtBQzVCWjtBRCtCUTtFQUNJLDJCQUFBO0FDN0JaO0FEZ0NROztFQUVJLHdCQUFBO0VBQ0EsMEJBQUE7RUFDQSxpQ0FBQTtBQzlCWjtBRCtCWTs7RUFDSSxzQkFBQTtFQUNBLHdCQUFBO0VBQ0EsaUNBQUE7QUM1QmhCO0FEZ0NRO0VBQ0ksWUFBQTtBQzlCWjtBRGlDUTs7RUFFSSxXQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtBQy9CWjtBRG1DSTtFQUNJLGNBQUE7RUFDQSxzQ0FoS1U7RUFpS1Ysc0NBaktVO0VBa0tWLDhDQUFBO0FDakNSO0FEbUNRO0VBQ0ksWUFBQTtBQ2pDWjtBRG9DUTs7RUFFSSx3QkFBQTtFQUNBLDBCQUFBO0VBQ0EsaUNBQUE7QUNsQ1o7QURtQ1k7O0VBQ0ksc0JBQUE7RUFDQSx3QkFBQTtFQUNBLGlDQUFBO0FDaENoQjtBRG9DUTtFQUNJLFdBQUE7RUFDQSxnQkFBQTtBQ2xDWjtBRHFDUTtFQUNJLFlBQUE7QUNuQ1o7QURzQ1E7RUFDSSxXQUFBO0FDcENaIiwiZmlsZSI6InNyYy9hcHAvZ2FtZXMvcmlraWtpL3Jpa2lraS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIiRwYW5lbC1wYWRkaW5nOiAxNjtcclxuJG1heC1nYW1lLXNjcmVlbjogMTAyNDtcclxuJG1heC1yZW5kZXItYXJlYTogY2FsYygoI3skbWF4LWdhbWUtc2NyZWVufSAtIDIgKiAjeyRwYW5lbC1wYWRkaW5nfSkgKiAxcHgpO1xyXG5cclxuLnJpa2lraS1jb250YWluZXIge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XHJcblxyXG4gICAgJl9fc2V0dGluZ3MtcGFuZWwge1xyXG4gICAgICAgIHdpZHRoOiA0NjhweDtcclxuICAgICAgICBtYXJnaW46IDIwMHB4IGF1dG87XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tcHJpbWFyeS1saWdodGVyLWNvbG9yKTtcclxuXHJcbiAgICAgICAgJl9yb3cge1xyXG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgaGVpZ2h0OiA0OHB4O1xyXG5cclxuICAgICAgICAgICAgLnBsYXllci1uYW1lIHtcclxuICAgICAgICAgICAgICAgIHdpZHRoOiAxMDhweDtcclxuICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXByaW1hcnktbGlnaHRlci1jb2xvcik7XHJcbiAgICAgICAgICAgICAgICBvdXRsaW5lOiBub25lO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgICZfX3BsYXktZ3JvdW5kIHtcclxuICAgICAgICAuY2FyZC10YWJsZS1wYW5lbCxcclxuICAgICAgICAubXktY2FyZHMtcGFuZWwge1xyXG4gICAgICAgICAgICBtYXJnaW46IDAgYXV0bztcclxuICAgICAgICAgICAgbWluLXdpZHRoOiAkbWF4LXJlbmRlci1hcmVhO1xyXG4gICAgICAgICAgICBtYXgtd2lkdGg6ICRtYXgtcmVuZGVyLWFyZWE7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAuY29udHJvbC1wYW5lbCB7XHJcbiAgICAgICAgICAgIG1hcmdpbjogMCBhdXRvO1xyXG4gICAgICAgICAgICBtaW4td2lkdGg6IDgyMHB4O1xyXG4gICAgICAgICAgICBtYXgtd2lkdGg6IDgyMHB4O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLnNjb3JlLWJvYXJkIHtcclxuICAgICAgICAgICAgbWFyZ2luOiAwIGF1dG87XHJcbiAgICAgICAgICAgIG1pbi13aWR0aDogNDAwcHg7XHJcbiAgICAgICAgICAgIG1heC13aWR0aDogNDAwcHg7XHJcbiAgICAgICAgfVxyXG4gICAgXHJcbiAgICAgICAgLmNhcmQtdGFibGUtcGFuZWwge1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS10YWJsZS1ncmVlbik7XHJcbiAgICAgICAgICAgIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDEwMHB4O1xyXG4gICAgICAgICAgICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogMTAwcHg7XHJcbiAgICAgICAgICAgIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDA7XHJcbiAgICAgICAgICAgIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiAwO1xyXG4gICAgICAgICAgICBtaW4taGVpZ2h0OiAzNTZweDtcclxuICAgICAgICAgICAgbWF4LWhlaWdodDogMzU2cHg7XHJcbiAgICAgICAgICAgIHBhZGRpbmc6IDE2cHggMTZweCAwcHggMTZweDtcclxuICAgIFxyXG4gICAgICAgICAgICAmX2ZpcnN0LWhhbGYge1xyXG4gICAgICAgICAgICAgICAgZmxleDogMCAxIDEwJTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAmX3NlY29uZC1oYWxmIHtcclxuICAgICAgICAgICAgICAgIGZsZXg6IDAgMSA5MCU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgXHJcbiAgICAgICAgfVxyXG4gICAgXHJcbiAgICAgICAgLm15LWNhcmRzLXBhbmVsIHtcclxuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tdGFibGUtZ3JlZW4pO1xyXG4gICAgICAgICAgICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAwO1xyXG4gICAgICAgICAgICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogMDtcclxuICAgICAgICAgICAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogMTAwcHg7XHJcbiAgICAgICAgICAgIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiAxMDBweDtcclxuICAgICAgICAgICAgbWluLWhlaWdodDogMjQwcHg7XHJcbiAgICAgICAgICAgIG1heC1oZWlnaHQ6IDI0MHB4O1xyXG4gICAgICAgICAgICBwYWRkaW5nOiAwcHggMTZweCAxNnB4IDE2cHg7XHJcblxyXG4gICAgICAgICAgICAmX19maXJzdC1oYWxmIHtcclxuICAgICAgICAgICAgICAgIGZsZXg6IDAgMSAxMCU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgJl9fc2Vjb25kLWhhbGYge1xyXG4gICAgICAgICAgICAgICAgZmxleDogMCAxIDkwJTtcclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgJl9teS1jYXJkcyB7XHJcbiAgICAgICAgICAgICAgICAgICAgLm1hcmdpbi1sZWZ0LTEge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW4tbGVmdDogMXJlbTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgLm15LWNhcmQtaW4taGFuZCB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICY6aG92ZXIge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICZfaW5mbyB7XHJcbiAgICAgICAgICAgICAgICAgICAgbWluLWhlaWdodDogNDBweDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgXHJcbiAgICAgICAgfVxyXG4gICAgXHJcbiAgICAgICAgLmNvbnRyb2wtcGFuZWwge1xyXG4gICAgICAgICAgICBwYWRkaW5nOiAwcHggMTZweDtcclxuICAgIFxyXG4gICAgICAgICAgICAmX2ZpcnN0LWhhbGYge1xyXG4gICAgICAgICAgICAgICAgZmxleDogMCAxIDc1JTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAmX3NlY29uZC1oYWxmIHtcclxuICAgICAgICAgICAgICAgIGZsZXg6IGF1dG87XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICBcclxuICAgICAgICAuY29udHJvbC1wYW5lbCxcclxuICAgICAgICAuc2NvcmUtYm9hcmQge1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1wcmltYXJ5LWxpZ2h0ZXItY29sb3IpO1xyXG4gICAgICAgIH1cclxuICAgIFxyXG4gICAgXHJcbiAgICAgICAgLmNhcmQtdGFibGUtb3RoZXItcGxheWVycyB7XHJcbiAgICAgICAgICAgIGZsZXg6IDAgMSBjYWxjKDEwMCUgLSA5NnB4KTtcclxuICAgICAgICAgICAgZGl2Om50aC1jaGlsZCgxKSB7XHJcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBub25lO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGRpdjpudGgtY2hpbGQoMikge1xyXG4gICAgICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDNyZW07XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgLm1hdC1zbGlkZXItaG9yaXpvbnRhbCB7XHJcbiAgICAgICAgICAgIG1pbi13aWR0aDogMTAwcHg7XHJcbiAgICAgICAgfVxyXG4gICAgXHJcbiAgICAgICAgLmNhcmQtc2l6ZSB7XHJcbiAgICAgICAgICAgIHdpZHRoOiA4MHB4O1xyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICAubXktY2FyZCB7XHJcbiAgICAgICAgICAgIGZsZXg6IDAgMSBjYWxjKDEwMCUgLSA5NnB4KTtcclxuICAgICAgICB9XHJcbiAgICBcclxuICAgICAgICAuc2NvcmUtYm9hcmQtaGVhZGVyLFxyXG4gICAgICAgIC5zY29yZS1ib2FyZC1yb3cge1xyXG4gICAgICAgICAgICBib3JkZXItYm90dG9tLXdpZHRoOiAxcHg7XHJcbiAgICAgICAgICAgIGJvcmRlci1ib3R0b20tc3R5bGU6IHNvbGlkO1xyXG4gICAgICAgICAgICBib3JkZXItY29sb3I6IHJnYmEoMCwgMCwgMCwgMC4xMik7XHJcbiAgICAgICAgICAgIGRpdjpudGgtY2hpbGQobiArIDIpIHtcclxuICAgICAgICAgICAgICAgIGJvcmRlci1sZWZ0LXdpZHRoOiAxcHg7XHJcbiAgICAgICAgICAgICAgICBib3JkZXItbGVmdC1zdHlsZTogc29saWQ7XHJcbiAgICAgICAgICAgICAgICBib3JkZXItY29sb3I6IHJnYmEoMCwgMCwgMCwgMC4xMik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC5zY29yZS1ib2FyZC1oZWFkZXIgZGl2IHtcclxuICAgICAgICAgICAgaGVpZ2h0OiAzNnB4O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLnNjb3JlLWJvYXJkLWhlYWRlciBkaXYsXHJcbiAgICAgICAgLnNjb3JlLWJvYXJkLXJvdyBkaXYge1xyXG4gICAgICAgICAgICB3aWR0aDogODBweDtcclxuICAgICAgICAgICAgcGFkZGluZzogNHB4IDhweDtcclxuICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAmX19oaXN0b3J5IHtcclxuICAgICAgICBtYXJnaW46IDAgYXV0bztcclxuICAgICAgICBtaW4td2lkdGg6ICRtYXgtcmVuZGVyLWFyZWE7XHJcbiAgICAgICAgbWF4LXdpZHRoOiAkbWF4LXJlbmRlci1hcmVhO1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXByaW1hcnktbGlnaHRlci1jb2xvcik7XHJcblxyXG4gICAgICAgIC5oaXN0b3J5LXNjb3JlLWJvYXJkLWhlYWRlci1uYW1lIHtcclxuICAgICAgICAgICAgaGVpZ2h0OiAzNnB4O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLmhpc3Rvcnktc2NvcmUtYm9hcmQtaGVhZGVyLFxyXG4gICAgICAgIC5oaXN0b3J5LXNjb3JlLWJvYXJkLXJvdyB7XHJcbiAgICAgICAgICAgIGJvcmRlci1ib3R0b20td2lkdGg6IDFweDtcclxuICAgICAgICAgICAgYm9yZGVyLWJvdHRvbS1zdHlsZTogc29saWQ7XHJcbiAgICAgICAgICAgIGJvcmRlci1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjEyKTtcclxuICAgICAgICAgICAgZGl2Om50aC1jaGlsZChuICsgMikuaGlzdG9yeS1zY29yZS1ib2FyZC1jb2wge1xyXG4gICAgICAgICAgICAgICAgYm9yZGVyLWxlZnQtd2lkdGg6IDFweDtcclxuICAgICAgICAgICAgICAgIGJvcmRlci1sZWZ0LXN0eWxlOiBzb2xpZDtcclxuICAgICAgICAgICAgICAgIGJvcmRlci1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjEyKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIFxyXG4gICAgICAgIC5oaXN0b3J5LXNjb3JlLWJvYXJkLWNvbCB7XHJcbiAgICAgICAgICAgIHdpZHRoOiA2MHB4O1xyXG4gICAgICAgICAgICBwYWRkaW5nOiA0cHggOHB4O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLmhpc3Rvcnktc2NvcmUtYm9hcmQtY29sLWhlaWdodCB7XHJcbiAgICAgICAgICAgIGhlaWdodDogNTZweDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC5oaXN0b3J5LWNhcmQtc2l6ZSB7XHJcbiAgICAgICAgICAgIHdpZHRoOiA0MHB4O1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG4iLCIucmlraWtpLWNvbnRhaW5lciB7XG4gIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xufVxuLnJpa2lraS1jb250YWluZXJfX3NldHRpbmdzLXBhbmVsIHtcbiAgd2lkdGg6IDQ2OHB4O1xuICBtYXJnaW46IDIwMHB4IGF1dG87XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXByaW1hcnktbGlnaHRlci1jb2xvcik7XG59XG4ucmlraWtpLWNvbnRhaW5lcl9fc2V0dGluZ3MtcGFuZWxfcm93IHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogNDhweDtcbn1cbi5yaWtpa2ktY29udGFpbmVyX19zZXR0aW5ncy1wYW5lbF9yb3cgLnBsYXllci1uYW1lIHtcbiAgd2lkdGg6IDEwOHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1wcmltYXJ5LWxpZ2h0ZXItY29sb3IpO1xuICBvdXRsaW5lOiBub25lO1xufVxuLnJpa2lraS1jb250YWluZXJfX3BsYXktZ3JvdW5kIC5jYXJkLXRhYmxlLXBhbmVsLFxuLnJpa2lraS1jb250YWluZXJfX3BsYXktZ3JvdW5kIC5teS1jYXJkcy1wYW5lbCB7XG4gIG1hcmdpbjogMCBhdXRvO1xuICBtaW4td2lkdGg6IGNhbGMoKDEwMjQgLSAyICogMTYpICogMXB4KTtcbiAgbWF4LXdpZHRoOiBjYWxjKCgxMDI0IC0gMiAqIDE2KSAqIDFweCk7XG59XG4ucmlraWtpLWNvbnRhaW5lcl9fcGxheS1ncm91bmQgLmNvbnRyb2wtcGFuZWwge1xuICBtYXJnaW46IDAgYXV0bztcbiAgbWluLXdpZHRoOiA4MjBweDtcbiAgbWF4LXdpZHRoOiA4MjBweDtcbn1cbi5yaWtpa2ktY29udGFpbmVyX19wbGF5LWdyb3VuZCAuc2NvcmUtYm9hcmQge1xuICBtYXJnaW46IDAgYXV0bztcbiAgbWluLXdpZHRoOiA0MDBweDtcbiAgbWF4LXdpZHRoOiA0MDBweDtcbn1cbi5yaWtpa2ktY29udGFpbmVyX19wbGF5LWdyb3VuZCAuY2FyZC10YWJsZS1wYW5lbCB7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXRhYmxlLWdyZWVuKTtcbiAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogMTAwcHg7XG4gIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAxMDBweDtcbiAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogMDtcbiAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDA7XG4gIG1pbi1oZWlnaHQ6IDM1NnB4O1xuICBtYXgtaGVpZ2h0OiAzNTZweDtcbiAgcGFkZGluZzogMTZweCAxNnB4IDBweCAxNnB4O1xufVxuLnJpa2lraS1jb250YWluZXJfX3BsYXktZ3JvdW5kIC5jYXJkLXRhYmxlLXBhbmVsX2ZpcnN0LWhhbGYge1xuICBmbGV4OiAwIDEgMTAlO1xufVxuLnJpa2lraS1jb250YWluZXJfX3BsYXktZ3JvdW5kIC5jYXJkLXRhYmxlLXBhbmVsX3NlY29uZC1oYWxmIHtcbiAgZmxleDogMCAxIDkwJTtcbn1cbi5yaWtpa2ktY29udGFpbmVyX19wbGF5LWdyb3VuZCAubXktY2FyZHMtcGFuZWwge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS10YWJsZS1ncmVlbik7XG4gIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDA7XG4gIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAwO1xuICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiAxMDBweDtcbiAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDEwMHB4O1xuICBtaW4taGVpZ2h0OiAyNDBweDtcbiAgbWF4LWhlaWdodDogMjQwcHg7XG4gIHBhZGRpbmc6IDBweCAxNnB4IDE2cHggMTZweDtcbn1cbi5yaWtpa2ktY29udGFpbmVyX19wbGF5LWdyb3VuZCAubXktY2FyZHMtcGFuZWxfX2ZpcnN0LWhhbGYge1xuICBmbGV4OiAwIDEgMTAlO1xufVxuLnJpa2lraS1jb250YWluZXJfX3BsYXktZ3JvdW5kIC5teS1jYXJkcy1wYW5lbF9fc2Vjb25kLWhhbGYge1xuICBmbGV4OiAwIDEgOTAlO1xufVxuLnJpa2lraS1jb250YWluZXJfX3BsYXktZ3JvdW5kIC5teS1jYXJkcy1wYW5lbF9fc2Vjb25kLWhhbGZfbXktY2FyZHMgLm1hcmdpbi1sZWZ0LTEge1xuICBtYXJnaW4tbGVmdDogMXJlbTtcbn1cbi5yaWtpa2ktY29udGFpbmVyX19wbGF5LWdyb3VuZCAubXktY2FyZHMtcGFuZWxfX3NlY29uZC1oYWxmX215LWNhcmRzIC5teS1jYXJkLWluLWhhbmQ6aG92ZXIge1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG4ucmlraWtpLWNvbnRhaW5lcl9fcGxheS1ncm91bmQgLm15LWNhcmRzLXBhbmVsX19zZWNvbmQtaGFsZl9pbmZvIHtcbiAgbWluLWhlaWdodDogNDBweDtcbn1cbi5yaWtpa2ktY29udGFpbmVyX19wbGF5LWdyb3VuZCAuY29udHJvbC1wYW5lbCB7XG4gIHBhZGRpbmc6IDBweCAxNnB4O1xufVxuLnJpa2lraS1jb250YWluZXJfX3BsYXktZ3JvdW5kIC5jb250cm9sLXBhbmVsX2ZpcnN0LWhhbGYge1xuICBmbGV4OiAwIDEgNzUlO1xufVxuLnJpa2lraS1jb250YWluZXJfX3BsYXktZ3JvdW5kIC5jb250cm9sLXBhbmVsX3NlY29uZC1oYWxmIHtcbiAgZmxleDogYXV0bztcbn1cbi5yaWtpa2ktY29udGFpbmVyX19wbGF5LWdyb3VuZCAuY29udHJvbC1wYW5lbCxcbi5yaWtpa2ktY29udGFpbmVyX19wbGF5LWdyb3VuZCAuc2NvcmUtYm9hcmQge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1wcmltYXJ5LWxpZ2h0ZXItY29sb3IpO1xufVxuLnJpa2lraS1jb250YWluZXJfX3BsYXktZ3JvdW5kIC5jYXJkLXRhYmxlLW90aGVyLXBsYXllcnMge1xuICBmbGV4OiAwIDEgY2FsYygxMDAlIC0gOTZweCk7XG59XG4ucmlraWtpLWNvbnRhaW5lcl9fcGxheS1ncm91bmQgLmNhcmQtdGFibGUtb3RoZXItcGxheWVycyBkaXY6bnRoLWNoaWxkKDEpIHtcbiAgZGlzcGxheTogbm9uZTtcbn1cbi5yaWtpa2ktY29udGFpbmVyX19wbGF5LWdyb3VuZCAuY2FyZC10YWJsZS1vdGhlci1wbGF5ZXJzIGRpdjpudGgtY2hpbGQoMikge1xuICBtYXJnaW4tbGVmdDogM3JlbTtcbn1cbi5yaWtpa2ktY29udGFpbmVyX19wbGF5LWdyb3VuZCAubWF0LXNsaWRlci1ob3Jpem9udGFsIHtcbiAgbWluLXdpZHRoOiAxMDBweDtcbn1cbi5yaWtpa2ktY29udGFpbmVyX19wbGF5LWdyb3VuZCAuY2FyZC1zaXplIHtcbiAgd2lkdGg6IDgwcHg7XG59XG4ucmlraWtpLWNvbnRhaW5lcl9fcGxheS1ncm91bmQgLm15LWNhcmQge1xuICBmbGV4OiAwIDEgY2FsYygxMDAlIC0gOTZweCk7XG59XG4ucmlraWtpLWNvbnRhaW5lcl9fcGxheS1ncm91bmQgLnNjb3JlLWJvYXJkLWhlYWRlcixcbi5yaWtpa2ktY29udGFpbmVyX19wbGF5LWdyb3VuZCAuc2NvcmUtYm9hcmQtcm93IHtcbiAgYm9yZGVyLWJvdHRvbS13aWR0aDogMXB4O1xuICBib3JkZXItYm90dG9tLXN0eWxlOiBzb2xpZDtcbiAgYm9yZGVyLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuMTIpO1xufVxuLnJpa2lraS1jb250YWluZXJfX3BsYXktZ3JvdW5kIC5zY29yZS1ib2FyZC1oZWFkZXIgZGl2Om50aC1jaGlsZChuKzIpLFxuLnJpa2lraS1jb250YWluZXJfX3BsYXktZ3JvdW5kIC5zY29yZS1ib2FyZC1yb3cgZGl2Om50aC1jaGlsZChuKzIpIHtcbiAgYm9yZGVyLWxlZnQtd2lkdGg6IDFweDtcbiAgYm9yZGVyLWxlZnQtc3R5bGU6IHNvbGlkO1xuICBib3JkZXItY29sb3I6IHJnYmEoMCwgMCwgMCwgMC4xMik7XG59XG4ucmlraWtpLWNvbnRhaW5lcl9fcGxheS1ncm91bmQgLnNjb3JlLWJvYXJkLWhlYWRlciBkaXYge1xuICBoZWlnaHQ6IDM2cHg7XG59XG4ucmlraWtpLWNvbnRhaW5lcl9fcGxheS1ncm91bmQgLnNjb3JlLWJvYXJkLWhlYWRlciBkaXYsXG4ucmlraWtpLWNvbnRhaW5lcl9fcGxheS1ncm91bmQgLnNjb3JlLWJvYXJkLXJvdyBkaXYge1xuICB3aWR0aDogODBweDtcbiAgcGFkZGluZzogNHB4IDhweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuLnJpa2lraS1jb250YWluZXJfX2hpc3Rvcnkge1xuICBtYXJnaW46IDAgYXV0bztcbiAgbWluLXdpZHRoOiBjYWxjKCgxMDI0IC0gMiAqIDE2KSAqIDFweCk7XG4gIG1heC13aWR0aDogY2FsYygoMTAyNCAtIDIgKiAxNikgKiAxcHgpO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1wcmltYXJ5LWxpZ2h0ZXItY29sb3IpO1xufVxuLnJpa2lraS1jb250YWluZXJfX2hpc3RvcnkgLmhpc3Rvcnktc2NvcmUtYm9hcmQtaGVhZGVyLW5hbWUge1xuICBoZWlnaHQ6IDM2cHg7XG59XG4ucmlraWtpLWNvbnRhaW5lcl9faGlzdG9yeSAuaGlzdG9yeS1zY29yZS1ib2FyZC1oZWFkZXIsXG4ucmlraWtpLWNvbnRhaW5lcl9faGlzdG9yeSAuaGlzdG9yeS1zY29yZS1ib2FyZC1yb3cge1xuICBib3JkZXItYm90dG9tLXdpZHRoOiAxcHg7XG4gIGJvcmRlci1ib3R0b20tc3R5bGU6IHNvbGlkO1xuICBib3JkZXItY29sb3I6IHJnYmEoMCwgMCwgMCwgMC4xMik7XG59XG4ucmlraWtpLWNvbnRhaW5lcl9faGlzdG9yeSAuaGlzdG9yeS1zY29yZS1ib2FyZC1oZWFkZXIgZGl2Om50aC1jaGlsZChuKzIpLmhpc3Rvcnktc2NvcmUtYm9hcmQtY29sLFxuLnJpa2lraS1jb250YWluZXJfX2hpc3RvcnkgLmhpc3Rvcnktc2NvcmUtYm9hcmQtcm93IGRpdjpudGgtY2hpbGQobisyKS5oaXN0b3J5LXNjb3JlLWJvYXJkLWNvbCB7XG4gIGJvcmRlci1sZWZ0LXdpZHRoOiAxcHg7XG4gIGJvcmRlci1sZWZ0LXN0eWxlOiBzb2xpZDtcbiAgYm9yZGVyLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuMTIpO1xufVxuLnJpa2lraS1jb250YWluZXJfX2hpc3RvcnkgLmhpc3Rvcnktc2NvcmUtYm9hcmQtY29sIHtcbiAgd2lkdGg6IDYwcHg7XG4gIHBhZGRpbmc6IDRweCA4cHg7XG59XG4ucmlraWtpLWNvbnRhaW5lcl9faGlzdG9yeSAuaGlzdG9yeS1zY29yZS1ib2FyZC1jb2wtaGVpZ2h0IHtcbiAgaGVpZ2h0OiA1NnB4O1xufVxuLnJpa2lraS1jb250YWluZXJfX2hpc3RvcnkgLmhpc3RvcnktY2FyZC1zaXplIHtcbiAgd2lkdGg6IDQwcHg7XG59Il19 */");

/***/ }),

/***/ "./src/app/games/rikiki/rikiki.component.ts":
/*!**************************************************!*\
  !*** ./src/app/games/rikiki/rikiki.component.ts ***!
  \**************************************************/
/*! exports provided: RikikiComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RikikiComponent", function() { return RikikiComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _table_parts_table_rikiki_table__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../table-parts/table/rikiki-table */ "./src/app/table-parts/table/rikiki-table.ts");
/* harmony import */ var lodash_es__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! lodash-es */ "./node_modules/lodash-es/lodash.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/__ivy_ngcc__/fesm2015/ngx-translate-core.js");
/* harmony import */ var _rikiki_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./rikiki.service */ "./src/app/games/rikiki/rikiki.service.ts");






let RikikiComponent = class RikikiComponent {
    constructor(translate, rikikiService) {
        var _a;
        this.translate = translate;
        this.rikikiService = rikikiService;
        /* TODO's
        * refaktorálni a kártya választásokat a rendezett kártya lista alapján
        */
        this.imgUrlPrefix = 'assets/images/';
        this.imgUrlSuffix = '.svg';
        this.defaultMsg = { type: '', msg: ' ', subMsg: ' ', translateParams: {} };
        this.deckSize = 52;
        this.playerNames = ['Eve', 'Luke', 'Jane', 'Sam', 'Tim', 'Tom'];
        this.nrOfPlayersMax = 7;
        this.placeholderCardImgUrl = `${this.imgUrlPrefix}card_placeholder${this.imgUrlSuffix}`;
        this.cardBackImgUrl = `${this.imgUrlPrefix}card_back_2${this.imgUrlSuffix}`;
        this.players = [];
        this.cardUrls = [];
        this.myCardUrl = this.placeholderCardImgUrl;
        this.trumpCardUrl = this.placeholderCardImgUrl;
        this.allMessage = this.defaultMsg;
        this.history = [];
        this.playerBetMin = 0;
        this.playerBetMax = 1;
        this.endOfGame = true;
        this.endOfRound = true;
        this.endOfBet = true;
        this.endOfSelection = true;
        this.nrOfRoundsMax = 9;
        this.nrOfPlayers = 3;
        this.nrOfRounds = 3;
        this.starterIdx = 1;
        this.playerName = (_a = history.state.data) === null || _a === void 0 ? void 0 : _a.playerName;
        this.nrOfPlayersTemp = this.nrOfPlayers;
        this.nrOfRoundsTemp = this.nrOfRounds;
        this.starterIdxTemp = this.starterIdx;
        this.leaveGame();
    }
    setNrOfPlayers() {
        this.nrOfPlayers = this.nrOfPlayersTemp;
        const maxRounds = Math.floor(this.deckSize / this.nrOfPlayers);
        this.nrOfRoundsMax = maxRounds > 9 ? 9 : maxRounds;
        this.nrOfRoundsTemp = this.nrOfRounds;
        this.starterIdxTemp = this.starterIdx;
    }
    setNrOfRounds() {
        this.nrOfRounds = this.nrOfRoundsTemp;
        this.nrOfPlayersTemp = this.nrOfPlayers;
        this.starterIdxTemp = this.starterIdx;
    }
    setStarter() {
        this.starterIdx = this.starterIdxTemp;
        this.nrOfPlayersTemp = this.nrOfPlayers;
        this.nrOfRoundsTemp = this.nrOfRounds;
    }
    convertCardToImgUrl(card) {
        return `${this.imgUrlPrefix}${card.printCard()}${this.imgUrlSuffix}`;
    }
    leaveGame() {
        this.myCardUrl = this.placeholderCardImgUrl;
        this.trumpCardUrl = this.placeholderCardImgUrl;
        this.allMessage = this.defaultMsg;
        this.playerBet = 0;
        this.dealerIdx = 0;
        this.endOfGame = true;
        this.endOfRound = true;
        this.endOfBet = true;
        this.endOfSelection = true;
        this.playerBetMax = this.round;
        this.initGame();
    }
    newGame() {
        this.endOfGame = false;
        this.initGame();
        this.newRound();
    }
    newRound() {
        this.endOfRound = false;
        ++this.relativeRound;
        this.playerBet = 0;
        this.playerBetMax = this.round;
        this.trumpCardUrl = this.placeholderCardImgUrl;
        this.showTableCards();
        // az adott körben kezdő játékos (osztó) váltása
        const starterPlayerIdx = (this.round - 1 + this.starterIdx - 1) % this.nrOfPlayers;
        this.dealerIdx = (starterPlayerIdx - 1 + this.nrOfPlayers) % this.nrOfPlayers;
        this.myTable.setStarterAndLastPlayer(starterPlayerIdx);
        // fogadás és megvalósulás számlálók inicializálása
        for (let i = 0; i < this.nrOfPlayers; ++i) {
            this.myTable.getPlayer(i).setBet(-1);
            this.myTable.getPlayer(i).resetReal();
        }
        // minden játékos kap egy kártyát, annyiszor amennyi kör van
        for (let i = 1; i <= this.round; ++i) {
            for (let j = 0; j < this.nrOfPlayers; ++j) {
                this.myTable.getPlayer(j).addCard(this.myTable.getCardFromDeck());
            }
        }
        // kártyák sorba rendezése
        if (this.round > 1) {
            this.myTable.getPlayer(0).sortPlayerCards();
        }
        // adu kártya húzása
        this.trumpCard = this.myTable.getTrumpCard();
        this.trumpCardUrl = this.convertCardToImgUrl(this.trumpCard);
        this.setBets(starterPlayerIdx);
    }
    bet() {
        if (this.playerBet === this.round - this.myTable.getBetTotal() && this.myTable.getPlayer(0).isLast()) {
            this.allMessage = {
                type: 'error',
                msg: 'MY_CARDS_PANEL.MESSAGES.INVALID_BET_MSG',
                subMsg: 'MY_CARDS_PANEL.MESSAGES.INVALID_BET_SUBMSG',
                translateParams: { playerBet: this.playerBet, round: this.round }
            };
        }
        else {
            this.allMessage = this.defaultMsg;
            this.myTable.getPlayer(0).setBet(this.playerBet);
            this.setBetTotalAndNextPlayer();
            this.setPlayersBet();
            this.endOfBet = true;
            this.playTurn();
        }
    }
    checkSelectedCard(selectedCardIdx, playerCards, trumpCardSuit, firstCardSuit) {
        const selectedCardSuit = playerCards[selectedCardIdx].getSuit();
        // TODO firstCardSuti lehet, hogy 0, mert a firstCard még nullCard, mert kezdő a játékos, mégis működik?! Kivizsgálni!
        if (selectedCardSuit === firstCardSuit) {
            return { isSelectedValid: true };
        }
        let hasFirstCardSuit = false;
        let hasTrumpCardSuit = false;
        for (let i = 0; (!hasFirstCardSuit || !hasTrumpCardSuit) && i < playerCards.length; i++) {
            const playerCardSuit = playerCards[i].getSuit();
            if (!hasFirstCardSuit) {
                hasFirstCardSuit = playerCardSuit === firstCardSuit;
            }
            if (!hasTrumpCardSuit) {
                hasTrumpCardSuit = playerCardSuit === trumpCardSuit;
            }
        }
        if (hasFirstCardSuit && selectedCardSuit !== firstCardSuit) {
            return { isSelectedValid: false, hasFirstCardSuit, hasTrumpCardSuit };
        }
        if (hasTrumpCardSuit && selectedCardSuit !== trumpCardSuit) {
            return { isSelectedValid: false, hasFirstCardSuit, hasTrumpCardSuit };
        }
        return { isSelectedValid: true };
    }
    selectedCard(selectedCardIdx) {
        if (!this.endOfSelection) {
            const player = this.myTable.getPlayer(0);
            const playerCards = player.getCards();
            if (selectedCardIdx <= this.round && selectedCardIdx <= playerCards.length) {
                const trumpCardSuit = this.trumpCard.getSuit();
                const firstCardSuit = this.myTable.getFirstCard().getSuit();
                const checkedCards = this.checkSelectedCard(selectedCardIdx, playerCards, trumpCardSuit, firstCardSuit);
                if (playerCards.length === 1 || player.isStarter() || checkedCards.isSelectedValid) {
                    this.myTable.putCardOnTable(this.playerIdx, player.removeCardByIdx(selectedCardIdx));
                    this.handleRound();
                    this.setPlayersTurn();
                    this.endOfSelection = true;
                    this.allMessage = this.defaultMsg;
                }
                else {
                    const isObligatedSuitTrump = firstCardSuit === trumpCardSuit || checkedCards.hasTrumpCardSuit && !checkedCards.hasFirstCardSuit;
                    if (isObligatedSuitTrump) {
                        this.allMessage = {
                            type: 'error',
                            msg: 'MY_CARDS_PANEL.MESSAGES.INCORRECT_SELECTION',
                            subMsg: 'MY_CARDS_PANEL.MESSAGES.SELECT_TRUMP_CARD_SUIT',
                            translateParams: {}
                        };
                    }
                    else {
                        const suits = ['CLUB', 'DIAMOND', 'HEART', 'SPADE'];
                        this.translate.get(suits[firstCardSuit - 1])
                            .subscribe((translation) => {
                            this.allMessage = {
                                type: 'error',
                                msg: 'MY_CARDS_PANEL.MESSAGES.INCORRECT_SELECTION',
                                subMsg: 'MY_CARDS_PANEL.MESSAGES.SELECT_FIRST_CARD_SUIT',
                                translateParams: { suit: translation }
                            };
                        });
                    }
                }
            }
            else {
                this.allMessage = {
                    type: 'error',
                    msg: 'MY_CARDS_PANEL.MESSAGES.INVALID_SELECTION',
                    subMsg: ' ',
                    translateParams: { selectedCardIdx: selectedCardIdx }
                };
            }
        }
    }
    confirmStand() {
        this.endOfSelection = false;
        if (this.myTable.getPlayer(0).hasCard()) {
            this.showTableCards();
            this.askPlayerToSelectCard();
        }
        if (!this.myTable.getPlayer(this.lastPlayerIdx).hasCard()) {
            for (let i = 0; i < this.nrOfPlayers; ++i) {
                this.myTable.getPlayer(i).setScore();
            }
            this.addToHistory();
            this.endOfSelection = true;
            this.endOfRound = true;
            this.shuffle();
            if (this.roundInc && this.round < this.nrOfRounds) {
                ++this.round;
            }
            else if (this.roundInc && this.round === this.nrOfRounds) {
                ++this.starterIdx;
                this.roundInc = false;
            }
            else if (this.round > 1) {
                --this.round;
            }
            else if (this.round <= 1) {
                this.endOfGame = true;
                this.findWinner();
            }
        }
    }
    initGame() {
        this.cardUrls = [];
        for (let i = 0; i < this.nrOfPlayers; i++) {
            this.cardUrls[i] = this.placeholderCardImgUrl;
        }
        this.relativeRound = 0;
        this.roundInc = true;
        this.myTable = new _table_parts_table_rikiki_table__WEBPACK_IMPORTED_MODULE_2__["RikikiTable"](this.nrOfPlayers);
        if (this.playerName) {
            this.myTable.getPlayer(0).setName(this.playerName);
        }
        for (let i = 1; i < this.nrOfPlayers; ++i) {
            this.myTable.getPlayer(i).setName(this.playerNames[i - 1]);
        }
        this.players = this.myTable.getPlayers();
        this.round = 1;
        this.history = [];
    }
    shuffle() {
        this.myTable.addCardToDeck(this.trumpCard);
        this.myTable.shuffleDeck();
    }
    sortPlayerCards() {
        this.myTable.getPlayer(0).getCards()
            .sort((a, b) => (a.getSuit() > b.getSuit()
            ? 1
            : (a.getSuit() === b.getSuit())
                ? ((a.getRank() > b.getRank()) ? 1 : -1)
                : -1));
    }
    setBetTotalAndNextPlayer() {
        this.betTotal += this.myTable.getPlayer(this.playerIdx).getBet();
        this.myTable.setBetTotal(this.betTotal);
        ++this.turnInRound;
        this.playerIdx = (this.turnInRound - 1 + this.starterIdx - 1) % this.nrOfPlayers;
    }
    setPlayersBet() {
        while (this.playerIdx !== 0 && this.myTable.getPlayer(this.playerIdx).getBet() < 0) {
            this.myTable.getPlayer(this.playerIdx)
                .setBet(this.rikikiService.betAI(this.myTable, this.trumpCard, this.nrOfPlayers, this.round, this.playerIdx));
            this.setBetTotalAndNextPlayer();
        }
    }
    askPlayerToBet() {
        const invalidBet = this.round - this.betTotal >= 0;
        const invalidBetText = this.myTable.getPlayer(0).isLast() && invalidBet
            ? 'MY_CARDS_PANEL.MESSAGES.CHOOSE_VALID_BET_SUBMSG'
            : ' ';
        this.allMessage = {
            type: 'info',
            msg: 'MY_CARDS_PANEL.MESSAGES.CHOOSE_VALID_BET_MSG',
            subMsg: invalidBetText,
            translateParams: { roundMinusBetTotal: this.round - this.betTotal }
        };
    }
    setBets(starterPlayerIdx) {
        this.endOfBet = false;
        this.turnInRound = this.round;
        this.betTotal = 0;
        this.playerIdx = starterPlayerIdx;
        if (this.playerIdx !== 0) {
            this.setPlayersBet();
        }
        if (this.round === 1) {
            this.showTableCards(true);
        }
        this.askPlayerToBet();
    }
    handleRound() {
        // ha pont annyi kártya van lent ahány játékos, akkor ebben a körben mindenki letette a lapját
        if (this.myTable.nrOfCardsOnTable() === this.nrOfPlayers) {
            const starterIdx = (this.playerIdx + 1) % this.nrOfPlayers;
            this.showTableCards();
            this.askPlayerToSelectCard();
            // aki viszi a kört, az lesz a kezdő
            this.playerIdx = this.myTable.findHighestCardOnTable(this.trumpCard.getSuit());
            this.myTable.getPlayer(this.playerIdx).addReal(1);
            this.addToHistory(true, starterIdx);
            this.myTable.removeCardsFromTable();
            this.myTable.setStarterAndLastPlayer(this.playerIdx);
            this.lastPlayerIdx = this.myTable.getLastPlayer();
        }
        else {
            ++this.playerIdx;
            this.playerIdx %= this.nrOfPlayers;
        }
    }
    setPlayersTurn() {
        while (this.playerIdx !== 0 && this.myTable.getPlayer(this.lastPlayerIdx).hasCard()) {
            // ha a játékosnak több kártyája van
            if (this.myTable.getPlayer(this.playerIdx).getCards().length > 1) {
                const selectedCard = this.rikikiService.selectCardAI(this.myTable, this.trumpCard, this.round, this.playerIdx);
                this.myTable.putCardOnTable(this.playerIdx, this.myTable.getPlayer(this.playerIdx).removeCardByIdx(selectedCard));
            }
            else {
                // ha a játékosnak csak egy kártyája maradt, akkor azt azonnal leteszi
                this.myTable.putCardOnTable(this.playerIdx, this.myTable.getPlayer(this.playerIdx).removeCardByIdx(0));
            }
            this.handleRound();
        }
    }
    askPlayerToSelectCard() {
        this.allMessage = {
            type: 'info',
            msg: 'MY_CARDS_PANEL.MESSAGES.CHOOSE_CARD',
            subMsg: ' ',
            translateParams: {}
        };
    }
    playTurn() {
        this.endOfSelection = false;
        this.lastPlayerIdx = this.myTable.getLastPlayer();
        if (this.playerIdx !== 0) {
            this.setPlayersTurn();
        }
        // ha a játékosnak több kártyája van
        // TODO this.playerIdx mindig 0-ra értendő
        const playerCardsLength = this.myTable.getPlayer(this.playerIdx).getCards().length;
        if (playerCardsLength > 1) {
            this.showTableCards();
        }
        this.askPlayerToSelectCard();
    }
    showTableCards(peek = false) {
        var _a, _b;
        let cardsOnTable = [];
        if (peek) {
            const players = this.myTable.getPlayers().slice(1);
            for (let i = 0; i < players.length; i++) {
                cardsOnTable[i + 1] = players[i].getCards()[0];
            }
        }
        else {
            cardsOnTable = this.myTable.checkCardSlotsOnTable();
        }
        for (let i = 0; i < this.nrOfPlayers; i++) {
            if (i === 0) {
                this.myCardUrl = ((_a = cardsOnTable[0]) === null || _a === void 0 ? void 0 : _a.getSuit()) ? this.convertCardToImgUrl(cardsOnTable[0])
                    : this.placeholderCardImgUrl;
            }
            else {
                this.cardUrls[i] = ((_b = cardsOnTable[i]) === null || _b === void 0 ? void 0 : _b.getSuit()) ? this.convertCardToImgUrl(cardsOnTable[i])
                    : this.placeholderCardImgUrl;
            }
        }
    }
    addToHistory(isCardRow = false, starterIdx = 0) {
        let turn = this.myTable.getPlayer(0).getCards().length;
        turn = this.round === 1 ? 1 : this.round - turn;
        let cardUrls = [];
        if (isCardRow) {
            cardUrls = Object(lodash_es__WEBPACK_IMPORTED_MODULE_3__["cloneDeep"])(this.cardUrls);
            cardUrls.splice(0, 1, this.convertCardToImgUrl(this.myTable.checkCardSlotsOnTable()[0]));
        }
        this.history.push({
            isCardRow,
            cardRow: isCardRow
                ? {
                    turnPerRound: `${turn}/${this.round}`,
                    trunStarter: this.myTable.getPlayer(starterIdx).getName(),
                    cardUrls: cardUrls,
                    turnTaker: this.myTable.getPlayer(this.playerIdx).getName(),
                }
                : {},
            scoreRow: isCardRow
                ? {}
                : {
                    trumpCardUrl: this.trumpCardUrl,
                    players: Object(lodash_es__WEBPACK_IMPORTED_MODULE_3__["cloneDeep"])(this.myTable.getPlayers())
                }
        });
    }
    findWinner() {
        const players = this.myTable.getPlayers();
        let winnerIdx = 0;
        let winner = players[winnerIdx];
        for (let i = 1; i < players.length; i++) {
            if (players[i].getScore() > winner.getScore()) {
                winner = players[i];
                winnerIdx = i;
            }
        }
        this.allMessage = winnerIdx === 0
            ? {
                type: 'info',
                msg: 'MY_CARDS_PANEL.MESSAGES.YOU_WON',
                subMsg: ' ',
                translateParams: {}
            }
            : {
                type: 'info',
                msg: 'MY_CARDS_PANEL.MESSAGES.ANOTHER_WON',
                subMsg: ' ',
                translateParams: { winner: winner.getName() }
            };
    }
};
RikikiComponent.ctorParameters = () => [
    { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__["TranslateService"] },
    { type: _rikiki_service__WEBPACK_IMPORTED_MODULE_5__["RikikiService"] }
];
RikikiComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-rikiki',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./rikiki.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/games/rikiki/rikiki.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./rikiki.component.scss */ "./src/app/games/rikiki/rikiki.component.scss")).default]
    })
], RikikiComponent);



/***/ }),

/***/ "./src/app/games/rikiki/rikiki.service.ts":
/*!************************************************!*\
  !*** ./src/app/games/rikiki/rikiki.service.ts ***!
  \************************************************/
/*! exports provided: RikikiService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RikikiService", function() { return RikikiService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var src_app_table_parts_suit_suits__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/table-parts/suit/suits */ "./src/app/table-parts/suit/suits.ts");



let RikikiService = class RikikiService {
    constructor() { }
    betAIRound1(myTable, nrOfPlayers, bettingPlayerIdx, bettingPlayer, totalBets, trumpCardSuit, bettingPlayerLast) {
        let bet;
        if (bettingPlayerLast) {
            if (totalBets === 1) {
                return 1; // az összfogadás nem egyezhet a körszámmal
            }
            else if (totalBets === 0) {
                return 0; // az összfogadás nem egyezhet a körszámmal
            }
        }
        bet = -1;
        for (let playerIdx = 0; bet !== 0 && playerIdx < nrOfPlayers; ++playerIdx) {
            if (playerIdx !== bettingPlayerIdx
                && trumpCardSuit === myTable.getPlayer(playerIdx).getCards()[0].getSuit()) {
                bet = 0; // van másnál adu
            }
        }
        if (bet < 0) {
            const seenBigSuits = []; // adun kívüli más színben lévő nagy lapok (nincs másnál adu)
            for (let playerIdx = 0; playerIdx < nrOfPlayers; ++playerIdx) {
                if (playerIdx !== bettingPlayerIdx
                    && myTable.getPlayer(playerIdx).getCards()[0].getRank() > 9) {
                    const otherPlayerSuit = myTable.getPlayer(playerIdx).getCards()[0].getSuit();
                    if (!seenBigSuits.includes(otherPlayerSuit)) {
                        seenBigSuits.push(otherPlayerSuit);
                    }
                }
            }
            if (seenBigSuits.length === 3) {
                bet = 0;
            }
            else if (bettingPlayer.isStarter()) {
                bet = 1; // nincs másnál adu vagy adun kívüli három különböző színben lévő nagy lapok és a játékos az első fogadó
            }
            else {
                for (let playerIdx = 0; playerIdx < nrOfPlayers; ++playerIdx) {
                    if (playerIdx !== bettingPlayerIdx
                        && myTable.getPlayer(playerIdx).isStarter()
                        && myTable.getPlayer(playerIdx).getBet() === 0) {
                        // nincs másnál adu vagy adun kívüli három különböző színben lévő nagy lapok
                        // és az első játékos nem fogadott magára
                        bet = 1;
                    }
                }
                if (bet < 0) {
                    bet = 0;
                }
            }
        }
        return bet;
    }
    betAIRound2(myTable, nrOfPlayers, round, bettingPlayerCards, totalBets, trumpCardSuit, bettingPlayerLast) {
        let bet = 0;
        const cardsIn = [true, true];
        let totalCardsOut = 0;
        let highTrumpCards = 0;
        let lowTrumpCards = 0;
        // adu kártya keresés
        for (let i = 0; i < round; ++i) {
            if (trumpCardSuit === bettingPlayerCards[i].getSuit()) {
                if (bettingPlayerCards[i].getRank() > 9) {
                    ++bet;
                    ++highTrumpCards;
                    ++totalCardsOut;
                    cardsIn[i] = false;
                }
                else if (bettingPlayerCards[i].getRank() <= 9) {
                    if (lowTrumpCards === 0) {
                        ++bet;
                    }
                    ++lowTrumpCards;
                    ++totalCardsOut;
                    cardsIn[i] = false;
                }
            }
        }
        // ha van még fogadható lap, akkor ha van egy magas adu és mellette egy magas lap, akkor plusz egy ütés
        if (totalCardsOut !== 2) {
            for (let i = 0; i < round; ++i) {
                if (cardsIn[i]
                    && highTrumpCards > 0
                    && bettingPlayerCards[i].getRank() > 10) {
                    ++bet;
                    ++totalCardsOut;
                    cardsIn[i] = false;
                }
            }
        }
        // ha a fogadás idáig nulla, akkor két nem adu színű magas lapra, ha az összegük nagyobb mint 23
        // pl. minimum J + Q kombó, akkor a fogadás 1
        if (bet === 0
            && bettingPlayerCards[0].getRank() >= 11
            && bettingPlayerCards[1].getRank() >= 11
            && bettingPlayerCards[0].getRank() + bettingPlayerCards[1].getRank() > 23) {
            ++bet;
            // az összfogadás nem egyezhet a körszámmal ezért vissza kell vonni egy ütést
            if (bettingPlayerLast && totalBets === 1) {
                --bet;
            }
        }
        else if (totalCardsOut === 2) {
            if (bettingPlayerLast) {
                // két magas vagy egy magas és egy alacsony adura vagy egy magas adura és egy magas lapra a fogadás 2 volt,
                // de az összfogadás 0 és az összegük nem egyezhet a körszámmal
                if (totalBets === 0 && lowTrumpCards !== 2) {
                    --bet;
                }
                else if (totalBets === 1 && lowTrumpCards === 2) {
                    // két alacsony adura a fogadás 1 volt, de az összfogadás is 1 és az összegük nem egyezhet a körszámmal
                    ++bet;
                }
            }
        }
        else {
            // ha legalább egy adu van
            if (totalCardsOut === 1) {
                // egy alacsony adu esetén a fogadás 1, de ha megelőzi 2-es fogadás, akkor 0-t fogad
                if (lowTrumpCards === 1) {
                    for (let i = 0; i < nrOfPlayers; ++i) {
                        if (myTable.getPlayer(i).getBet() === 2) {
                            --bet;
                        }
                    }
                }
                // egy magas adu esetén a fogadás 1
                // vagy egy alacsony adu esetén, ha nem előzi meg 2-es fogadás, akkor a fogadás 1
                // de az összfogadás is 1 és az összegük nem egyezhet a körszámmal
                if (bettingPlayerLast && totalBets === 1 && bet === 1) {
                    if (highTrumpCards > 0) {
                        ++bet;
                    }
                    else {
                        --bet;
                    }
                }
            }
            // rossz lapok vagy alacsony adura fogadás visszavonása (megelőzi 2-es fogadás) esetén a fogadás 0,
            // de az összfogadás 2 és az összegük nem egyezhet a körszámmal
            if (bettingPlayerLast && totalBets === 2 && bet === 0) {
                ++bet;
            }
        }
        return bet;
    }
    betAIRound3OrHigher(nrOfPlayers, round, bettingPlayerCards, bettingPlayerLast, totalBets, trumpCardSuit) {
        const cardsIn = [];
        let bet = 0;
        let kings = 0;
        let totalCardsOut = 0;
        let highTrumpCards = 0;
        let middleTrumpCards = 0;
        let lowTrumpCards = 0;
        for (let i = 0; i < round; i++) {
            cardsIn.push(true);
        }
        // adu kártya keresés
        for (let i = 0; i < round; ++i) {
            if (trumpCardSuit === bettingPlayerCards[i].getSuit()
                && bettingPlayerCards[i].getRank() > 11) {
                ++bet;
                ++highTrumpCards;
                ++totalCardsOut;
                cardsIn[i] = false;
            }
        }
        for (let i = 0; i < round; ++i) {
            if (trumpCardSuit === bettingPlayerCards[i].getSuit()
                && bettingPlayerCards[i].getRank() <= 11
                && bettingPlayerCards[i].getRank() >= 9) {
                if ((highTrumpCards > 1 || middleTrumpCards < 2) && round * nrOfPlayers <= 36) {
                    ++bet;
                    ++totalCardsOut;
                    cardsIn[i] = false;
                }
                ++middleTrumpCards;
            }
        }
        for (let i = 0; i < round; ++i) {
            if (trumpCardSuit === bettingPlayerCards[i].getSuit()
                && bettingPlayerCards[i].getRank() < 9) {
                if (lowTrumpCards !== 0 && (lowTrumpCards + 1) % 2 === 0 && round * nrOfPlayers <= 36) {
                    ++bet;
                    ++totalCardsOut;
                    cardsIn[i] = false;
                }
                ++lowTrumpCards;
            }
        }
        // ha van még fogadható lap, akkor ha van egy magas adu és mellette egy magas lap, akkor plusz egy ütés
        if (totalCardsOut !== round) {
            let remainingTrumpCards = (middleTrumpCards + lowTrumpCards) - (totalCardsOut - highTrumpCards);
            for (let i = 0; i < round; ++i) {
                if (cardsIn[i]
                    && trumpCardSuit !== bettingPlayerCards[i].getSuit()
                    && bettingPlayerCards[i].getRank() > 11
                    && remainingTrumpCards > 0) {
                    ++bet;
                    ++totalCardsOut;
                    cardsIn[i] = false;
                    --remainingTrumpCards;
                }
            }
        }
        if (bet === 0) {
            for (let i = 0; i < round; ++i) {
                if (bettingPlayerCards[i].getRank() === 14 && round < 5 && nrOfPlayers < 5) {
                    ++bet;
                }
                if (bettingPlayerCards[i].getRank() === 13 && round < 5 && nrOfPlayers < 5) {
                    ++bet;
                    ++kings;
                }
            }
        }
        if (bettingPlayerLast && (totalBets + bet === round)) {
            if (bet === round) {
                --bet;
            }
            else if (bet === 0) {
                ++bet;
            }
            else {
                if (highTrumpCards === bet) {
                    ++bet;
                }
                else if (kings > 0) {
                    --bet;
                }
                else {
                    --bet;
                }
            }
        }
        return bet;
    }
    betAI(myTable, trumpCard, nrOfPlayers, round, bettingPlayerIdx) {
        const bettingPlayer = myTable.getPlayer(bettingPlayerIdx);
        const bettingPlayerCards = bettingPlayer.getCards();
        const totalBets = myTable.getBetTotal();
        const trumpCardSuit = trumpCard.getSuit();
        const bettingPlayerLast = bettingPlayer.isLast();
        if (round === 1) {
            return this.betAIRound1(myTable, nrOfPlayers, bettingPlayerIdx, bettingPlayer, totalBets, trumpCardSuit, bettingPlayerLast);
        }
        else if (round === 2) {
            return this.betAIRound2(myTable, nrOfPlayers, round, bettingPlayerCards, totalBets, trumpCardSuit, bettingPlayerLast);
        }
        else {
            return this.betAIRound3OrHigher(nrOfPlayers, round, bettingPlayerCards, bettingPlayerLast, totalBets, trumpCardSuit);
        }
    }
    tryToBeatTrumpCard(myTable, player, playerCards, trumpCardSuit) {
        let cardIdx = player.findHighestTrumpCard(trumpCardSuit);
        const cardsOnTable = myTable.checkCardsOnTable();
        // Az asztalon lévő adu kártyáknál van-e nagyobb adukártyája a játékosnak
        // ha nincs a legkisebbet teszi
        if (cardIdx !== -1) {
            let higherRankFound = false;
            for (let i = 0; !higherRankFound && i < cardsOnTable.length; ++i) {
                if (cardsOnTable[i].getSuit() === trumpCardSuit
                    && cardsOnTable[i].getRank() > playerCards[cardIdx].getRank()) {
                    cardIdx = player.findLowestTrumpCard(trumpCardSuit);
                    higherRankFound = true;
                }
            }
        }
        return cardIdx;
    }
    selectCardAI(myTable, trumpCard, round, playerIdx) {
        const trumpCardSuit = trumpCard.getSuit();
        const player = myTable.getPlayer(playerIdx);
        const playerCards = player.getCards();
        const playerBet = player.getBet();
        let cardIdx = -1;
        let firstCardSuit = -1;
        if (player.isStarter()) {
            if (playerBet === round) {
                cardIdx = player.findHighestTrumpCard(trumpCardSuit);
                if (cardIdx === -1) {
                    cardIdx = player.findPlayerHighestCard();
                }
                return cardIdx;
            }
            if (playerBet <= 1) {
                cardIdx = player.findHighestTrumpCard(trumpCardSuit);
                if (cardIdx > -1) {
                    cardIdx = player.findLowestCard(trumpCardSuit, trumpCardSuit);
                }
                if (cardIdx === -1) {
                    cardIdx = player.findPlayerLowestCard();
                }
                return cardIdx;
            }
        }
        if (!myTable.isTableEmpty()) {
            firstCardSuit = myTable.getFirstCard().getSuit();
        }
        if (playerBet <= 0) {
            if (playerBet === 0) {
                for (let i = 0; cardIdx === -1 && i < playerCards.length; ++i) {
                    if (firstCardSuit !== trumpCardSuit && firstCardSuit === playerCards[i].getSuit()) {
                        cardIdx = player.findLowestSuitCard(firstCardSuit);
                    }
                }
                if (firstCardSuit === trumpCardSuit
                    || (firstCardSuit !== trumpCardSuit && player.getSortedCards()[src_app_table_parts_suit_suits__WEBPACK_IMPORTED_MODULE_2__["suits"][trumpCardSuit - 1]].length)) {
                    cardIdx = player.findLowestTrumpCard(trumpCardSuit);
                }
                if (cardIdx === -1) {
                    cardIdx = player.findHighestCard(trumpCardSuit, firstCardSuit);
                }
            }
        }
        else {
            // ha legalább egy ütés lett fogadva
            // a nyitó színben, ha az nem adu, tegye a legnagyobbat
            if (firstCardSuit !== trumpCardSuit) {
                for (let i = 0; cardIdx === -1 && i < playerCards.length; ++i) {
                    if (firstCardSuit === playerCards[i].getSuit()) {
                        cardIdx = player.findHighestSuitCard(firstCardSuit);
                    }
                }
                // ha a nyitó szín adu
            }
            else if (firstCardSuit === trumpCardSuit) {
                let highTrumpCards = 0;
                for (let i = 0; i < playerCards.length; ++i) {
                    if (trumpCardSuit === playerCards[i].getSuit() && playerCards[i].getRank() > 9) {
                        highTrumpCards += 1;
                    }
                }
                if (highTrumpCards > 2) {
                    cardIdx = this.tryToBeatTrumpCard(myTable, player, playerCards, trumpCardSuit);
                }
                else {
                    cardIdx = player.findLowestTrumpCard(trumpCardSuit);
                }
            }
            // ha nincs a nyitó színben lapja és a nyitó szín nem adu
            if (cardIdx === -1) {
                cardIdx = this.tryToBeatTrumpCard(myTable, player, playerCards, trumpCardSuit);
            }
            // ha nincs a nyitó színben lapja és a nyitó szín nem adu és nincs aduja, tegye a legkisebb kártyát
            if (cardIdx === -1) {
                cardIdx = player.findLowestCard(trumpCardSuit, firstCardSuit);
            }
        }
        return cardIdx;
    }
};
RikikiService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
], RikikiService);



/***/ }),

/***/ "./src/app/home/home.component.scss":
/*!******************************************!*\
  !*** ./src/app/home/home.component.scss ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".home-container__settings-panel {\n  width: 468px;\n  margin: 250px auto;\n  background-color: var(--primary-lighter-color);\n}\n.home-container__settings-panel_row {\n  width: 100%;\n  height: 48px;\n}\n.home-container__settings-panel_row .player-name {\n  width: 108px;\n  background-color: var(--primary-lighter-color);\n  outline: none;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS9DOlxcZ2l0XFxjYXJkLWdhbWVzL3NyY1xcYXBwXFxob21lXFxob21lLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9ob21lL2hvbWUuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0U7RUFDRSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSw4Q0FBQTtBQ0FKO0FERUk7RUFDRSxXQUFBO0VBQ0EsWUFBQTtBQ0FOO0FERU07RUFDRSxZQUFBO0VBQ0EsOENBQUE7RUFDQSxhQUFBO0FDQVIiLCJmaWxlIjoic3JjL2FwcC9ob21lL2hvbWUuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuaG9tZS1jb250YWluZXIge1xyXG4gICZfX3NldHRpbmdzLXBhbmVsIHtcclxuICAgIHdpZHRoOiA0NjhweDtcclxuICAgIG1hcmdpbjogMjUwcHggYXV0bztcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXByaW1hcnktbGlnaHRlci1jb2xvcik7XHJcblxyXG4gICAgJl9yb3cge1xyXG4gICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgaGVpZ2h0OiA0OHB4O1xyXG5cclxuICAgICAgLnBsYXllci1uYW1lIHtcclxuICAgICAgICB3aWR0aDogMTA4cHg7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tcHJpbWFyeS1saWdodGVyLWNvbG9yKTtcclxuICAgICAgICBvdXRsaW5lOiBub25lO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbiIsIi5ob21lLWNvbnRhaW5lcl9fc2V0dGluZ3MtcGFuZWwge1xuICB3aWR0aDogNDY4cHg7XG4gIG1hcmdpbjogMjUwcHggYXV0bztcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tcHJpbWFyeS1saWdodGVyLWNvbG9yKTtcbn1cbi5ob21lLWNvbnRhaW5lcl9fc2V0dGluZ3MtcGFuZWxfcm93IHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogNDhweDtcbn1cbi5ob21lLWNvbnRhaW5lcl9fc2V0dGluZ3MtcGFuZWxfcm93IC5wbGF5ZXItbmFtZSB7XG4gIHdpZHRoOiAxMDhweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tcHJpbWFyeS1saWdodGVyLWNvbG9yKTtcbiAgb3V0bGluZTogbm9uZTtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/home/home.component.ts":
/*!****************************************!*\
  !*** ./src/app/home/home.component.ts ***!
  \****************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var ngx_webstorage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-webstorage */ "./node_modules/ngx-webstorage/__ivy_ngcc__/fesm2015/ngx-webstorage.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/__ivy_ngcc__/fesm2015/ngx-translate-core.js");





let HomeComponent = class HomeComponent {
    constructor(router, localStorage, translate) {
        this.router = router;
        this.localStorage = localStorage;
        this.translate = translate;
        this.currLang = this.localStorage.retrieve('lang');
        this.langChange(this.currLang);
        this.playerNameTemp = this.localStorage.retrieve('name');
        if (this.playerNameTemp) {
            this.setPlayerName();
        }
        else {
            this.playerName = 'player';
        }
    }
    langChange(lang) {
        this.translate.use(lang);
        this.localStorage.store('lang', lang);
    }
    setPlayerName() {
        this.playerName = this.playerNameTemp;
        this.localStorage.store('name', this.playerName);
    }
    goToRikiki() {
        this.router.navigate(['rikiki'], {
            state: { data: { playerName: this.playerName } },
        });
    }
    goToHearts() {
        this.router.navigate(['hearts'], {
            state: { data: { playerName: this.playerName } },
        });
    }
};
HomeComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: ngx_webstorage__WEBPACK_IMPORTED_MODULE_3__["LocalStorageService"] },
    { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__["TranslateService"] }
];
HomeComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-home',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./home.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./home.component.scss */ "./src/app/home/home.component.scss")).default]
    })
], HomeComponent);



/***/ }),

/***/ "./src/app/table-parts/card/card.ts":
/*!******************************************!*\
  !*** ./src/app/table-parts/card/card.ts ***!
  \******************************************/
/*! exports provided: Card */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Card", function() { return Card; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

class Card {
    /*
    * CLUBS = 1;
    * DIAMONDS = 2;
    * HEARTS = 3;
    * SPADES = 4;
    * DEUCE = 2;
    * THREE = 3;
    * FOUR = 4;
    * FIVE = 5;
    * SIX = 6;
    * SEVEN = 7;
    * EIGHT = 8;
    * NINE = 9;
    * TEN = 10;
    * JACK = 11;
    * QUEEN = 12;
    * KING = 13;
    * ACE = 14;
    */
    constructor(suit, rank) {
        if (this.isValidRank(rank) && this.isValidSuit(suit)) {
            this.rank = rank;
            this.suit = suit;
        }
        else {
            console.log(`Creat card failed suit ${suit} rank ${rank}`);
        }
    }
    getSuit() {
        return this.suit;
    }
    getRank() {
        return this.rank;
    }
    printCard() {
        return `${this.rankToString(this.rank)}${this.suitToString(this.suit)}`;
    }
    isValidRank(rank) {
        return rank === 0 || 2 <= rank && rank <= 14;
    }
    isValidSuit(suit) {
        return suit === 0 || 1 <= suit && suit <= 4;
    }
    rankToString(rank) {
        switch (rank) {
            case 2:
                return '2';
            case 3:
                return '3';
            case 4:
                return '4';
            case 5:
                return '5';
            case 6:
                return '6';
            case 7:
                return '7';
            case 8:
                return '8';
            case 9:
                return '9';
            case 10:
                return '10';
            case 11:
                return 'J';
            case 12:
                return 'Q';
            case 13:
                return 'K';
            case 14:
                return 'A';
            default:
                return '0';
        }
    }
    suitToString(suit) {
        switch (suit) {
            case 1:
                return 'C';
            case 2:
                return 'D';
            case 3:
                return 'H';
            case 4:
                return 'S';
            default:
                return '0';
        }
    }
}


/***/ }),

/***/ "./src/app/table-parts/card/cards.ts":
/*!*******************************************!*\
  !*** ./src/app/table-parts/card/cards.ts ***!
  \*******************************************/
/*! exports provided: nullCard, clubTwo, spadeQueen, spadeKing, spadeAce, isSpecificCard, isSpecificCardIncluded */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "nullCard", function() { return nullCard; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "clubTwo", function() { return clubTwo; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "spadeQueen", function() { return spadeQueen; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "spadeKing", function() { return spadeKing; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "spadeAce", function() { return spadeAce; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isSpecificCard", function() { return isSpecificCard; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isSpecificCardIncluded", function() { return isSpecificCardIncluded; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _card__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./card */ "./src/app/table-parts/card/card.ts");


const nullCard = new _card__WEBPACK_IMPORTED_MODULE_1__["Card"](0, 0);
const clubTwo = new _card__WEBPACK_IMPORTED_MODULE_1__["Card"](1, 2);
const spadeQueen = new _card__WEBPACK_IMPORTED_MODULE_1__["Card"](4, 12);
const spadeKing = new _card__WEBPACK_IMPORTED_MODULE_1__["Card"](4, 13);
const spadeAce = new _card__WEBPACK_IMPORTED_MODULE_1__["Card"](4, 14);
const isSpecificCard = (cardToExamin, cardToCompare) => {
    return cardToExamin.getSuit() === cardToCompare.getSuit() && cardToExamin.getRank() === cardToCompare.getRank();
};
const isSpecificCardIncluded = (cards, cardToFind) => {
    var _a;
    return (_a = cards) === null || _a === void 0 ? void 0 : _a.filter(card => isSpecificCard(card, cardToFind)).length;
};


/***/ }),

/***/ "./src/app/table-parts/deck/deck.ts":
/*!******************************************!*\
  !*** ./src/app/table-parts/deck/deck.ts ***!
  \******************************************/
/*! exports provided: Deck */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Deck", function() { return Deck; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _card_card__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../card/card */ "./src/app/table-parts/card/card.ts");


class Deck {
    constructor() {
        this.deck = [];
        for (let i = 1; i < 5; ++i) {
            for (let j = 2; j < 15; ++j) {
                this.deck.push(new _card_card__WEBPACK_IMPORTED_MODULE_1__["Card"](i, j));
            }
        }
        Deck.shuffle(this.deck);
    }
    static shuffle(array) {
        let currentIndex = array.length;
        let temporaryValue;
        let randomIndex;
        // While there remain elements to shuffle...
        while (0 !== currentIndex) {
            // Pick a remaining element...
            randomIndex = Math.floor(Math.random() * currentIndex);
            currentIndex -= 1;
            // And swap it with the current element.
            temporaryValue = array[currentIndex];
            array[currentIndex] = array[randomIndex];
            array[randomIndex] = temporaryValue;
        }
        return array;
    }
    getDeck() {
        return this.deck;
    }
}


/***/ }),

/***/ "./src/app/table-parts/player/hearts-player.ts":
/*!*****************************************************!*\
  !*** ./src/app/table-parts/player/hearts-player.ts ***!
  \*****************************************************/
/*! exports provided: HeartsPlayer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeartsPlayer", function() { return HeartsPlayer; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _player__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./player */ "./src/app/table-parts/player/player.ts");
/* harmony import */ var lodash_es__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lodash-es */ "./node_modules/lodash-es/lodash.js");
/* harmony import */ var _suit_suit__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../suit/suit */ "./src/app/table-parts/suit/suit.ts");
/* harmony import */ var _suit_suits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../suit/suits */ "./src/app/table-parts/suit/suits.ts");





class HeartsPlayer extends _player__WEBPACK_IMPORTED_MODULE_1__["Player"] {
    constructor(name) {
        super(name);
        this.startegyTakeAll = false;
        this.cardsToSwap = [];
    }
    setScore() {
        this.score += this.real;
    }
    addCard(card) {
        super.addCard(card);
        this.sortPlayerCards();
    }
    removeCard(cardToRemove) {
        const suit = _suit_suits__WEBPACK_IMPORTED_MODULE_4__["suits"][cardToRemove.getSuit() - 1];
        const properSuitsArray = this.sortedCards[suit];
        this.sortedCards[suit] = properSuitsArray.filter((card) => card.getRank() !== cardToRemove.getRank());
        this.sortPlayerCards();
    }
    removeCardByIdx(indexOf) {
        const removedCard = super.removeCardByIdx(indexOf);
        this.sortPlayerCards();
        return removedCard;
    }
    sortPlayerCards() {
        super.sortPlayerCards([_suit_suit__WEBPACK_IMPORTED_MODULE_3__["Suit"].HEART, _suit_suit__WEBPACK_IMPORTED_MODULE_3__["Suit"].SPADE, _suit_suit__WEBPACK_IMPORTED_MODULE_3__["Suit"].DIAMOND, _suit_suit__WEBPACK_IMPORTED_MODULE_3__["Suit"].CLUB]);
    }
    isStartegyTakeAll() {
        return this.startegyTakeAll;
    }
    setStartegyTakeAll(takeAll) {
        this.startegyTakeAll = takeAll;
    }
    addCardToSwap(card) {
        this.cardsToSwap.push(card);
    }
    getCardsToSwap() {
        const cardsToSwapTemp = Object(lodash_es__WEBPACK_IMPORTED_MODULE_2__["cloneDeep"])(this.cardsToSwap);
        this.cardsToSwap = [];
        return cardsToSwapTemp;
    }
}


/***/ }),

/***/ "./src/app/table-parts/player/player.ts":
/*!**********************************************!*\
  !*** ./src/app/table-parts/player/player.ts ***!
  \**********************************************/
/*! exports provided: Player */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Player", function() { return Player; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _suit_suits__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../suit/suits */ "./src/app/table-parts/suit/suits.ts");


class Player {
    constructor(name) {
        this.cards = [];
        this.sortedCards = {
            clubs: [],
            diamonds: [],
            hearts: [],
            spades: [],
        };
        this.bet = -1;
        this.real = 0;
        this.score = 0;
        this.starter = false;
        this.last = false;
        this.name = name;
    }
    getName() {
        return this.name;
    }
    setName(name) {
        this.name = name;
    }
    hasCard() {
        return !!this.cards.length;
    }
    addCard(card) {
        const cardSuitArray = this.sortedCards[_suit_suits__WEBPACK_IMPORTED_MODULE_1__["suits"][card.getSuit() - 1]];
        let inserted = false;
        if (!cardSuitArray.length) {
            cardSuitArray.push(card);
        }
        else {
            for (let i = 0; !inserted && i < cardSuitArray.length; i++) {
                if (card.getRank() < cardSuitArray[i].getRank()) {
                    inserted = true;
                    cardSuitArray.splice(i, 0, card);
                }
            }
            if (!inserted) {
                cardSuitArray.push(card);
            }
        }
    }
    removeCardByIdx(indexOf) {
        const cardToRemove = this.cards.splice(indexOf, 1)[0];
        const suit = _suit_suits__WEBPACK_IMPORTED_MODULE_1__["suits"][cardToRemove.getSuit() - 1];
        const properSuitsArray = this.sortedCards[suit];
        this.sortedCards[suit] = properSuitsArray.filter((card) => card.getRank() !== cardToRemove.getRank());
        return cardToRemove;
    }
    getCards() {
        return this.cards;
    }
    getSortedCards() {
        return this.sortedCards;
    }
    getSortedCardsLength() {
        return this.sortedCards.clubs.length
            + this.sortedCards.diamonds.length
            + this.sortedCards.hearts.length
            + this.sortedCards.spades.length;
    }
    sortPlayerCards(suitOrder) {
        this.cards = [
            ...this.sortedCards[_suit_suits__WEBPACK_IMPORTED_MODULE_1__["suits"][suitOrder[0] - 1]],
            ...this.sortedCards[_suit_suits__WEBPACK_IMPORTED_MODULE_1__["suits"][suitOrder[1] - 1]],
            ...this.sortedCards[_suit_suits__WEBPACK_IMPORTED_MODULE_1__["suits"][suitOrder[2] - 1]],
            ...this.sortedCards[_suit_suits__WEBPACK_IMPORTED_MODULE_1__["suits"][suitOrder[3] - 1]]
        ];
    }
    findCard(trumpSuit, playerSuit, highestCardRank, lowestCardRank) {
        let cardIndex = -1;
        for (let i = 0; i < this.cards.length; ++i) {
            const currentSuit = this.cards[i].getSuit();
            const currentRank = this.cards[i].getRank();
            const highestRank = highestCardRank !== undefined && highestCardRank < currentRank;
            const lowestRank = lowestCardRank !== undefined && lowestCardRank > currentRank;
            if (trumpSuit === undefined || playerSuit === undefined) {
                const suit = trumpSuit !== undefined ? trumpSuit : playerSuit;
                if (suit === currentSuit) {
                    if (highestRank) {
                        highestCardRank = currentRank;
                        cardIndex = i; // highest suit
                    }
                    else if (lowestRank) {
                        lowestCardRank = currentRank;
                        cardIndex = i; // lowest suit
                    }
                }
            }
            else if (trumpSuit !== currentSuit && playerSuit !== currentSuit) {
                if (highestRank) {
                    highestCardRank = currentRank;
                    cardIndex = i;
                }
                else if (lowestRank) {
                    lowestCardRank = currentRank;
                    cardIndex = i;
                }
            }
        }
        return cardIndex;
    }
    findHighestTrumpCard(trumpSuit) {
        return this.findCard(trumpSuit, undefined, 0, undefined);
    }
    findLowestTrumpCard(trumpSuit) {
        return this.findCard(trumpSuit, undefined, undefined, 15);
    }
    findHighestSuitCard(playerStarterSuit) {
        return this.findCard(undefined, playerStarterSuit, 0, undefined);
    }
    findLowestSuitCard(playerStarterSuit) {
        return this.findCard(undefined, playerStarterSuit, undefined, 15);
    }
    findHighestCard(trumpCardSuit, playerStarterSuit) {
        return this.findCard(trumpCardSuit, playerStarterSuit, 0, undefined);
    }
    findLowestCard(trumpCardSuit, playerStarterSuit) {
        return this.findCard(trumpCardSuit, playerStarterSuit, undefined, 15);
    }
    findPlayerHighestCard() {
        let cardIndex = -1;
        let highestCardRank = 0;
        for (let i = 0; i < this.cards.length; ++i) {
            const currentRank = this.cards[i].getRank();
            if (highestCardRank < currentRank) {
                highestCardRank = currentRank;
                cardIndex = i;
            }
        }
        return cardIndex;
    }
    findPlayerLowestCard() {
        let cardIndex = -1;
        let lowestCardRank = 15;
        for (let i = 0; i < this.cards.length; ++i) {
            const currentRank = this.cards[i].getRank();
            if (lowestCardRank > currentRank) {
                lowestCardRank = currentRank;
                cardIndex = i;
            }
        }
        return cardIndex;
    }
    /**
    * Legnagyobb értékű kártya keresése a megadott színek között
    *
    * @param selectedSuits
    * A megadott kártya színek amelyekben a keresés történjen
    *
    * @return
    * A legnagyobb értékű kártya, ha több van a megadott prioritás szerint választódik
    *
    */
    findHighestCardInSortedCards(selectedSuits) {
        const highCards = [];
        selectedSuits.forEach(suitNr => {
            const suitCards = this.sortedCards[_suit_suits__WEBPACK_IMPORTED_MODULE_1__["suits"][suitNr - 1]];
            if (suitCards.length) {
                highCards.push(suitCards[suitCards.length - 1]);
            }
        });
        highCards.sort((a, b) => (a.getRank() < b.getRank()) ? 1 : -1);
        return highCards[0];
    }
    /**
    * Legkisebb értékű kártya keresése a megadott színek között
    *
    * @param selectedSuits
    * A megadott kártya színek amelyekben a keresés történjen
    *
    * @return
    * A legkisebb értékű kártya, ha több van a megadott prioritás szerint választódik
    *
    */
    findLowestCardInSortedCards(selectedSuits) {
        const lowestCards = [];
        selectedSuits.forEach(suitNr => {
            const suitCards = this.sortedCards[_suit_suits__WEBPACK_IMPORTED_MODULE_1__["suits"][suitNr - 1]];
            if (suitCards.length) {
                lowestCards.push(suitCards[0]);
            }
        });
        lowestCards.sort((a, b) => (a.getRank() > b.getRank()) ? 1 : -1);
        return lowestCards[0];
    }
    getBet() {
        return this.bet;
    }
    setBet(bet) {
        this.bet = bet;
    }
    getReal() {
        return this.real;
    }
    addReal(real) {
        this.real += real;
    }
    resetReal() {
        this.real = 0;
    }
    getScore() {
        return this.score;
    }
    resetScore() {
        this.score = 0;
    }
    isStarter() {
        return this.starter;
    }
    setStarter(starter) {
        this.starter = starter;
    }
    isLast() {
        return this.last;
    }
    setLast(last) {
        this.last = last;
    }
}


/***/ }),

/***/ "./src/app/table-parts/player/rikiki-player.ts":
/*!*****************************************************!*\
  !*** ./src/app/table-parts/player/rikiki-player.ts ***!
  \*****************************************************/
/*! exports provided: RikikiPlayer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RikikiPlayer", function() { return RikikiPlayer; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _suit_suit__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../suit/suit */ "./src/app/table-parts/suit/suit.ts");
/* harmony import */ var _player__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./player */ "./src/app/table-parts/player/player.ts");



class RikikiPlayer extends _player__WEBPACK_IMPORTED_MODULE_2__["Player"] {
    constructor(name) {
        super(name);
    }
    setScore() {
        let score = 0;
        if (this.bet === this.real) {
            score += 10 + this.real * 2;
        }
        if (this.bet > this.real) {
            score -= (this.bet - this.real) * 2;
        }
        if (this.bet < this.real) {
            score -= (this.real - this.bet) * 2;
        }
        this.score += score;
    }
    addCard(card) {
        super.addCard(card);
        this.sortPlayerCards();
    }
    removeCardByIdx(indexOf) {
        const removedCard = super.removeCardByIdx(indexOf);
        this.sortPlayerCards();
        return removedCard;
    }
    sortPlayerCards() {
        super.sortPlayerCards([_suit_suit__WEBPACK_IMPORTED_MODULE_1__["Suit"].CLUB, _suit_suit__WEBPACK_IMPORTED_MODULE_1__["Suit"].DIAMOND, _suit_suit__WEBPACK_IMPORTED_MODULE_1__["Suit"].HEART, _suit_suit__WEBPACK_IMPORTED_MODULE_1__["Suit"].SPADE]);
    }
}


/***/ }),

/***/ "./src/app/table-parts/suit/suit.ts":
/*!******************************************!*\
  !*** ./src/app/table-parts/suit/suit.ts ***!
  \******************************************/
/*! exports provided: Suit */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Suit", function() { return Suit; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

var Suit;
(function (Suit) {
    Suit[Suit["CLUB"] = 1] = "CLUB";
    Suit[Suit["DIAMOND"] = 2] = "DIAMOND";
    Suit[Suit["HEART"] = 3] = "HEART";
    Suit[Suit["SPADE"] = 4] = "SPADE";
})(Suit || (Suit = {}));


/***/ }),

/***/ "./src/app/table-parts/suit/suits.ts":
/*!*******************************************!*\
  !*** ./src/app/table-parts/suit/suits.ts ***!
  \*******************************************/
/*! exports provided: suits */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "suits", function() { return suits; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

const suits = ['clubs', 'diamonds', 'hearts', 'spades'];


/***/ }),

/***/ "./src/app/table-parts/table/hearts-table.ts":
/*!***************************************************!*\
  !*** ./src/app/table-parts/table/hearts-table.ts ***!
  \***************************************************/
/*! exports provided: HeartsTable */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeartsTable", function() { return HeartsTable; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _table__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./table */ "./src/app/table-parts/table/table.ts");
/* harmony import */ var _player_hearts_player__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../player/hearts-player */ "./src/app/table-parts/player/hearts-player.ts");
/* harmony import */ var _suit_suit__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../suit/suit */ "./src/app/table-parts/suit/suit.ts");
/* harmony import */ var _card_cards__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../card/cards */ "./src/app/table-parts/card/cards.ts");





class HeartsTable extends _table__WEBPACK_IMPORTED_MODULE_1__["Table"] {
    constructor(nrOfPlayers) {
        super(nrOfPlayers);
        this.players = [];
        this.spadeQueenOut = false;
        this.heartsBroken = false;
        for (let i = 1; i <= nrOfPlayers; ++i) {
            const str = `Player${i}`;
            this.players.push(new _player_hearts_player__WEBPACK_IMPORTED_MODULE_2__["HeartsPlayer"](str));
        }
    }
    getPlayers() {
        return this.players;
    }
    getPlayer(nrOfPlayer) {
        return this.players[nrOfPlayer];
    }
    setStarterAndLastPlayer(starterPlayer) {
        for (let i = 0; i < this.nrOfPlayers; ++i) {
            if (i === starterPlayer) {
                this.getPlayer(i).setStarter(true);
            }
            else {
                this.getPlayer(i).setStarter(false);
            }
            if (i === (this.nrOfPlayers + starterPlayer - 1) % this.nrOfPlayers) {
                this.getPlayer(i).setLast(true);
            }
            else {
                this.getPlayer(i).setLast(false);
            }
        }
    }
    getStarter() {
        let starter = -1;
        for (let i = 0; i < this.nrOfPlayers; ++i) {
            if (this.getPlayer(i).isStarter()) {
                starter = i;
            }
        }
        return starter;
    }
    getLastPlayer() {
        let lastPlayer = -1;
        for (let i = 0; i < this.nrOfPlayers; ++i) {
            if (this.getPlayer(i).isLast()) {
                lastPlayer = i;
            }
        }
        return lastPlayer;
    }
    isSpadeQueenOut() {
        return this.spadeQueenOut;
    }
    isHeartsBroken() {
        return this.heartsBroken;
    }
    resetHeartsBroken() {
        this.heartsBroken = false;
        this.spadeQueenOut = false;
    }
    putCardOnTable(playerIdx, card) {
        super.putCardOnTable(playerIdx, card);
        if (Object(_card_cards__WEBPACK_IMPORTED_MODULE_4__["isSpecificCard"])(card, _card_cards__WEBPACK_IMPORTED_MODULE_4__["spadeQueen"])) {
            this.spadeQueenOut = true;
            this.heartsBroken = true;
        }
        if (card.getSuit() === _suit_suit__WEBPACK_IMPORTED_MODULE_3__["Suit"].HEART) {
            this.heartsBroken = true;
        }
    }
    findTurnTaker() {
        let playerIndex = -1;
        let highestCardRank = 0;
        for (let i = 0; i < this.nrOfPlayers; ++i) {
            const currentSuit = this.cardsOnTable[i].getSuit();
            const currentRank = this.cardsOnTable[i].getRank();
            if (this.firstCard.getSuit() === currentSuit && highestCardRank < currentRank) {
                highestCardRank = currentRank;
                playerIndex = i;
            }
        }
        return playerIndex;
    }
    getCardPoints() {
        let points = 0;
        for (let i = 0; i < this.nrOfPlayers; ++i) {
            const currentCard = this.cardsOnTable[i];
            if (currentCard.getSuit() === _suit_suit__WEBPACK_IMPORTED_MODULE_3__["Suit"].HEART) {
                points += 1;
            }
            else if (Object(_card_cards__WEBPACK_IMPORTED_MODULE_4__["isSpecificCard"])(currentCard, _card_cards__WEBPACK_IMPORTED_MODULE_4__["spadeQueen"])) {
                points += 13;
            }
        }
        return points;
    }
}


/***/ }),

/***/ "./src/app/table-parts/table/rikiki-table.ts":
/*!***************************************************!*\
  !*** ./src/app/table-parts/table/rikiki-table.ts ***!
  \***************************************************/
/*! exports provided: RikikiTable */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RikikiTable", function() { return RikikiTable; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _table__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./table */ "./src/app/table-parts/table/table.ts");
/* harmony import */ var _player_rikiki_player__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../player/rikiki-player */ "./src/app/table-parts/player/rikiki-player.ts");



class RikikiTable extends _table__WEBPACK_IMPORTED_MODULE_1__["Table"] {
    constructor(nrOfPlayers) {
        super(nrOfPlayers);
        this.players = [];
        this.betTotal = 0;
        for (let i = 1; i <= nrOfPlayers; ++i) {
            const str = `Player${i}`;
            this.players.push(new _player_rikiki_player__WEBPACK_IMPORTED_MODULE_2__["RikikiPlayer"](str));
        }
    }
    getPlayers() {
        return this.players;
    }
    getPlayer(nrOfPlayer) {
        return this.players[nrOfPlayer];
    }
    setStarterAndLastPlayer(starterPlayer) {
        for (let i = 0; i < this.nrOfPlayers; ++i) {
            if (i === starterPlayer) {
                this.getPlayer(i).setStarter(true);
            }
            else {
                this.getPlayer(i).setStarter(false);
            }
            if (i === (this.nrOfPlayers + starterPlayer - 1) % this.nrOfPlayers) {
                this.getPlayer(i).setLast(true);
            }
            else {
                this.getPlayer(i).setLast(false);
            }
        }
    }
    getStarter() {
        let starter = -1;
        for (let i = 0; i < this.nrOfPlayers; ++i) {
            if (this.getPlayer(i).isStarter()) {
                starter = i;
            }
        }
        return starter;
    }
    getLastPlayer() {
        let lastPlayer = -1;
        for (let i = 0; i < this.nrOfPlayers; ++i) {
            if (this.getPlayer(i).isLast()) {
                lastPlayer = i;
            }
        }
        return lastPlayer;
    }
    getBetTotal() {
        return this.betTotal;
    }
    setBetTotal(betTotal) {
        this.betTotal = betTotal;
    }
}


/***/ }),

/***/ "./src/app/table-parts/table/table.ts":
/*!********************************************!*\
  !*** ./src/app/table-parts/table/table.ts ***!
  \********************************************/
/*! exports provided: Table */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Table", function() { return Table; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _card_cards__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../card/cards */ "./src/app/table-parts/card/cards.ts");
/* harmony import */ var _deck_deck__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../deck/deck */ "./src/app/table-parts/deck/deck.ts");



class Table {
    constructor(nrOfPlayers) {
        this.deck = [];
        this.cardsOnTable = [];
        this.firstCard = _card_cards__WEBPACK_IMPORTED_MODULE_1__["nullCard"];
        this.nrOfPlayers = nrOfPlayers;
        const deckOfCards = new _deck_deck__WEBPACK_IMPORTED_MODULE_2__["Deck"]();
        this.deck = deckOfCards.getDeck();
        this.initCardsOnTable();
    }
    initCardsOnTable() {
        for (let i = 0; i < this.nrOfPlayers; i++) {
            this.cardsOnTable[i] = _card_cards__WEBPACK_IMPORTED_MODULE_1__["nullCard"];
        }
    }
    shuffleDeck() {
        _deck_deck__WEBPACK_IMPORTED_MODULE_2__["Deck"].shuffle(this.deck);
    }
    getDeck() {
        return this.deck;
    }
    getCardFromDeck() {
        return this.deck.splice(0, 1)[0];
    }
    addCardToDeck(card) {
        this.deck.push(card);
    }
    getTrumpCard() {
        return this.getCardFromDeck();
    }
    nrOfCardsOnTable() {
        let nrOfCards = 0;
        for (let i = 0; i < this.cardsOnTable.length; i++) {
            if (!!this.cardsOnTable[i].getSuit()) {
                ++nrOfCards;
            }
        }
        return nrOfCards;
    }
    getFirstCard() {
        return this.firstCard;
    }
    checkCardSlotsOnTable() {
        return this.cardsOnTable;
    }
    checkCardsOnTable() {
        const cardsOnTable = [];
        for (let i = 0; i < this.cardsOnTable.length; i++) {
            if (this.cardsOnTable[i].getSuit()) {
                cardsOnTable.push(this.cardsOnTable[i]);
            }
        }
        return cardsOnTable;
    }
    checkCardOnTable(indexOf) {
        return this.cardsOnTable[indexOf];
    }
    isTableEmpty() {
        return !this.cardsOnTable.filter(card => card !== _card_cards__WEBPACK_IMPORTED_MODULE_1__["nullCard"]).length;
    }
    putCardOnTable(playerIdx, card) {
        if (!this.firstCard.getSuit()) {
            this.firstCard = card;
        }
        this.cardsOnTable.splice(playerIdx, 1, card);
    }
    removeCardsFromTable() {
        this.deck = [...this.deck, ...this.checkCardsOnTable()];
        this.initCardsOnTable();
        this.firstCard = _card_cards__WEBPACK_IMPORTED_MODULE_1__["nullCard"];
    }
    findHighestCardOnTable(trumpCardSuit) {
        let cardIndex = -1;
        let highestCardRank = 0;
        for (let i = 0; i < this.nrOfPlayers; ++i) {
            const currentSuit = this.cardsOnTable[i].getSuit();
            const currentRank = this.cardsOnTable[i].getRank();
            if (trumpCardSuit === currentSuit && highestCardRank < currentRank) {
                highestCardRank = currentRank;
                cardIndex = i;
            }
        }
        if (cardIndex === -1) {
            for (let i = 0; i < this.nrOfPlayers; ++i) {
                const currentSuit = this.cardsOnTable[i].getSuit();
                const currentRank = this.cardsOnTable[i].getRank();
                if (this.firstCard.getSuit() === currentSuit && highestCardRank < currentRank) {
                    highestCardRank = currentRank;
                    cardIndex = i;
                }
            }
        }
        return cardIndex;
    }
}


/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

const environment = {
    production: false
};
/*
 * In development mode, for easier debugging, you can ignore zone related error
 * stack frames such as `zone.run`/`zoneDelegate.invokeTask` by importing the
 * below file. Don't forget to comment it out in production mode
 * because it will have a performance impact when errors are thrown
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/__ivy_ngcc__/fesm2015/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");





if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])
    .catch(err => console.log(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\git\card-games\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map