import { Component, HostListener } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NgIf, NgClass } from '@angular/common';
import { ThemeService } from '../../core/services/theme.service';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterModule, NgIf, NgClass],
  templateUrl: './navbar.html',
  styleUrl: './navbar.scss'
})
export class Navbar {

  isOpen = false;
  isScrolled = false;
  isDark = false;

  constructor(private themeService: ThemeService) {
    this.isDark = this.themeService.isDarkMode();
  }

  toggleMenu() {
    this.isOpen = !this.isOpen;
  }

  toggleTheme() {
    console.log('clicked');
    this.themeService.toggleTheme();
    this.isDark = this.themeService.isDarkMode();
  }

  @HostListener('window:scroll', [])
  onScroll() {
    this.isScrolled = window.scrollY > 10;
  }
}
