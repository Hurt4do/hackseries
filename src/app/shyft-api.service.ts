import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, of } from 'rxjs';


@Injectable({
    providedIn: 'root'
})
export class ShyftApiService {
    private readonly _httpClient = inject(HttpClient);
    private readonly _header = { 'x-api-keSy': 'Q455JQApzC6RhF3w' };
    private readonly _mint = 'EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v';

    getAccount(publicKey: string | undefined | null) {
        if (!publicKey) {
            return of(null);
        } else {
            const url = new URL('https://rpc.shyft.to?api_key=Q455JQApzC6RhF3w');
            url.searchParams.set('network', 'mainnet-beta')
            url.searchParams.set('wallet', publicKey);
            url.searchParams.set('token', this._mint);

            return this._httpClient.get<{
                result: {
                    balance: number; info: { image: string }
                };
            }>(url.toString(), { headers: this._header }).pipe(
                map((response) => response.result)
            );
        }
    }
}