import { Component, inject } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HdWalletMultiButtonComponent } from '@heavy-duty/wallet-adapter-material';
import { ShyftApiService } from './shyft-api.service';
import { WalletStore } from '@heavy-duty/wallet-adapter';
import { toSignal } from '@angular/core/rxjs-interop';
import { computedAsync } from 'ngxtension/computed-async';


@Component({
  standalone: true,
  imports: [RouterModule, HdWalletMultiButtonComponent],
  selector: 'agroi-root',
  template: `
    <header class="py-8">
      <h1>Hola</h1>
      <div>
      <hd-wallet-multi-button></hd-wallet-multi-button>
      </div>
      
      @if(account()){
        <div>Conectada</div>
      }
    </header>
    
  `,
})
export class AppComponent {
  private readonly _shyftApiService = inject(ShyftApiService);
  private readonly _walletStore = inject(WalletStore);
  private readonly _publicKey = toSignal(this._walletStore.publicKey$);

  readonly account = computedAsync(() => this._shyftApiService.getAccount(this._publicKey()?.toBase58()),
    { requireSync: true },
  );
}
