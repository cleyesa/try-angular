import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule} from '@angular/common/http';
import { AppRoutingModule, routingComponents } from './app-routing.module';
import { AppComponent } from './app.component';
import { PokemonsService } from './pokemons.service';
// import { PokemonSearchComponent } from './pokemon-search/pokemon-search/pokemon-search.component';
// import { PokemonDetailsComponent } from './pokemon-details/pokemon-details/pokemon-details.component';

@NgModule({
  declarations: [
    AppComponent,
    routingComponents
    // PokemonSearchComponent,
    // PokemonDetailsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [PokemonsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
