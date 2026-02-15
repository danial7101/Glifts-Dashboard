import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class ThemeService {

    private darkClass = 'dark';   // ✅ THIS is what you're asking about

    constructor() {
        this.loadTheme();
    }

    toggleTheme() {
        const html = document.documentElement;

        if (html.classList.contains(this.darkClass)) {
            html.classList.remove(this.darkClass);
            localStorage.setItem('theme', 'light');
        } else {
            html.classList.add(this.darkClass);
            localStorage.setItem('theme', 'dark');
        }
    }

    private loadTheme() {
        const saved = localStorage.getItem('theme');

        if (saved === 'dark') {
            document.documentElement.classList.add(this.darkClass);
        }
    }

    isDarkMode(): boolean {
        return document.documentElement.classList.contains(this.darkClass);
    }
}
