import { Component, OnInit, inject } from '@angular/core';
import { CommonModule, Location } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-track-order',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './track-order.component.html',
  styleUrls: ['./track-order.component.scss']
})
export class TrackOrderComponent implements OnInit {
  location = inject(Location);

  stages = ['Preparing', 'Out for delivery', 'Delivered'];
  currentStage = 0;

  estimatedTime = 300; // in seconds (5 mins)
  countdownDisplay = '';

  rating = 0;
  feedback = '';

  ngOnInit(): void {
    this.updateCountdownDisplay();
    this.startStageProgress();
    this.startCountdown();
  }

  updateCountdownDisplay() {
    const minutes = Math.floor(this.estimatedTime / 60);
    const seconds = this.estimatedTime % 60;
    this.countdownDisplay = `${minutes}m ${seconds}s`;
  }

  startCountdown() {
    const countdownInterval = setInterval(() => {
      if (this.estimatedTime > 0) {
        this.estimatedTime--;
        this.updateCountdownDisplay();
      } else {
        clearInterval(countdownInterval);
      }
    }, 1000);
  }

  startStageProgress() {
    const stageInterval = setInterval(() => {
      if (this.currentStage < this.stages.length - 1) {
        this.currentStage++;
      } else {
        clearInterval(stageInterval);
      }
    }, 5000);
  }

  setRating(star: number) {
    this.rating = star;
  }

  submitFeedback() {
    console.log('Rating:', this.rating);
    console.log('Feedback:', this.feedback);
    this.location.back();
  }
}
