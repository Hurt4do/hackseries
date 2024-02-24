import { Component } from '@angular/core';
import { MatButton } from '@angular/material/button'

@Component({
    standalone: true,
    selector: 'cha-test',
    template: `
        this is a test
        <button mat-raised-button color="primary">si</button>
    `,
    imports: [MatButton]
})

export class ChaTestComponent {
    title = "Chaviza"
}