import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {MainScene} from './phaser/MainScene';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent implements OnInit {

  phaserConfig: Phaser.Types.Core.GameConfig;

  phaserGame: Phaser.Game;

  constructor() {

  }

  ngOnInit() {
    this.phaserConfig = {
      type: Phaser.AUTO,
      height: 600,
      width: 800,
      scene: [MainScene],
      parent: 'gameContainer',
      physics: {
        default: 'arcade',
        arcade: {
          gravity: {y: 100}
        }
      }
    };

  }

  onGameReady(phaser: Phaser.Game): void {
    this.phaserGame = phaser;
    console.log('Game is Ready');
    console.log(this.phaserGame);
  }


}
