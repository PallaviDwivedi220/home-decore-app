import { Component, OnDestroy, OnInit } from '@angular/core';
import { NgbTypeaheadModule } from '@ng-bootstrap/ng-bootstrap';
import { Observable, OperatorFunction, Subscription } from 'rxjs';
import { debounceTime, distinctUntilChanged, map } from 'rxjs/operators';
import { FormsModule } from '@angular/forms';
import { HomepageData, SearchProducts } from '../home-page/homepage-interfaces';
import { HomepageDataService } from '../home-page/homepage-data.service';

@Component({
  selector: 'app-autocomplete',
  standalone: true,
  templateUrl: './autocomplete.component.html',
  styleUrl: './autocomplete.component.scss',
  imports: [NgbTypeaheadModule, FormsModule],
})

export class AutocompleteComponent implements OnInit, OnDestroy{
	constructor(private homepageDataService: HomepageDataService){}

	private subscription:Subscription | undefined;
	searchProducts:HomepageData['searchProducts'] = []; 
	model: any;

	async ngOnInit(): Promise<void> {
		this.subscription = this.homepageDataService.homepageData$.subscribe({
			next: ((data) =>{
				this.searchProducts = data.searchProducts;
			}),
			error : ((err) => {
				this.searchProducts = [];
			})
		})
	}

	ngOnDestroy(): void {
		this.subscription?.unsubscribe();
	}

	search: OperatorFunction<string, string[]> = (text$: Observable<string>) =>
		text$.pipe(
			debounceTime(200),
			distinctUntilChanged(),
			map((term) => {
				if(term.length < 2){
					return [];
				}
				else{
					return this.searchProducts.filter((v) => v.name.toLowerCase().indexOf(term.toLowerCase()) > -1).slice(0, 10).map((product) => product.name);
				}
			})
		);
	}


