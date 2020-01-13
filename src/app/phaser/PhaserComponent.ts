import {AfterViewInit, ChangeDetectionStrategy, Component, ElementRef, EventEmitter, Input, OnDestroy, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-phaser',
  template: '',
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class PhaserComponent implements OnInit, AfterViewInit, OnDestroy {

  @Input()
  public config: Phaser.Types.Core.GameConfig;

  @Output()
  public readonly gameReady = new EventEmitter();

  private phaser: Phaser.Game;

  public constructor(private elementRef: ElementRef) {
  }

  public ngOnInit() {
    this.phaser = new Phaser.Game(this.config);
  }

  public ngAfterViewInit() {
    this.phaser.events.once('ready', () => {
      this.elementRef.nativeElement.appendChild(this.phaser.canvas);
      this.elementRef.nativeElement.style.overflow = 'hidden';
      this.gameReady.emit(this.phaser);
    });
  }

  public ngOnDestroy() {
    if (this.phaser && typeof this.phaser.destroy === 'function') {
      this.phaser.destroy(true);
    }
  }


}
