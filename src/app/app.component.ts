import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';

import { RegionInterface, CountryInterface, CityInterface } from './interfaces/locations.interface';
import { LocationsService } from './services/locations.service';
import { ModalService } from './services/modal.service';
import { FormService } from './services/form.service';
import { ProviderDetails } from './interfaces/provider.interface';
import { FIELDS } from './constants/constants';
import { ProviderService } from './services/provider.service';

import LiferayParams from '../types/LiferayParams'

declare const Liferay: any;

@Component({
	templateUrl: 
		Liferay.ThemeDisplay.getPathContext() + 
		'/o/mkpl-edit-provider/app/app.component.html'
})
export class AppComponent implements OnInit {
	providerDetail: ProviderDetails;
	form: FormGroup;
	regions: RegionInterface[];
	cities: CityInterface[];
	countries: CountryInterface[];
	requestError = false;
	isGeneralVisible = true;
	isContactVisible = true;
  
	constructor(
	  private route: ActivatedRoute,
	  private locationService: LocationsService,
	  private modalService: ModalService,
	  private formService: FormService,
	  private location: Location,
	  private providerService: ProviderService
	) { }
  
	ngOnInit() {
	  this.form = this.formService.createForm(FIELDS);
	  this.locationService.getCountries().subscribe(({ data }) => this.countries = data, () => this.countries = []);
	  this.route.data.subscribe(({ user }) => {
		this.locationService.getRegions(user.location.city.region.country.id).subscribe(response => {
		  this.regions = response.data;
		  this.locationService.getCities(user.location.city.region.id).subscribe(response => {
			this.cities = response.data;
			this.providerDetail = user;
			this.setData();
		  },
			() => this.cities = []);
		},
		  () => this.regions = []);
	  });
	}
  
	setData() {
	  const formData = {
		general: {
		  company: this.providerDetail.name,
		  nit: this.providerDetail.nit,
		  country: this.providerDetail.location.city.region.country.id,
		  region: this.providerDetail.location.city.region.id,
		  city: this.providerDetail.location.city.id,
		  address: this.providerDetail.location.address
		},
		contact: {
		  contactName: this.providerDetail.contactName,
		  contactPhone: this.providerDetail.phone,
		  contactEmail: this.providerDetail.email,
		  adminEmail: this.providerDetail.adminUser.email
		}
	  };
	  this.form.setValue(formData);
	}
  
	changeCountry(value:any) {
	  this.locationService.getRegions(value).subscribe(response => this.regions = response.data, () => this.regions = []);
	  this.form.get('general.region').setValue('');
	}
  
	changeRegion(value:any) {
	  this.locationService.getCities(value).subscribe(response => this.cities = response.data, () => this.cities = []);
	  this.form.get('general.city').setValue('');
	}
  
	saveChanges() {
	  const data = {
		id: this.providerDetail.id,
		nit: this.form.get('general').value.nit,
		name: this.form.get('general').value.company,
		phone: this.form.get('contact').value.contactPhone,
		contact_name: this.form.get('contact').value.contactName,
		email: this.form.get('contact').value.contactEmail.toLowerCase(),
		active: this.providerDetail.active,
		location: {
		  id: this.providerDetail.location.id,
		  address: this.form.get('general').value.address
		},
		admin_user: {
		  id: this.providerDetail.adminUser.id,
		  email: this.form.get('contact').value.adminEmail.toLowerCase()
		}
	  };
	  //TODO por inconvniente en el subscribe
	  /* this.providerService.putProviderProfile(data, this.form.get('general').value.city).subscribe(
		() => {
		  this.requestError = false;
		  this.openModal();
		},
		() => {
		  this.requestError = true;
		  this.openModal();
		}
	  ); */
	}
  
	openModal() {
	  this.modalService.open('modal-subsidiary-edit');
	}
  
	closeModal() {
	  this.modalService.close('modal-subsidiary-edit');
	  if (!this.requestError) {
		this.goBack();
	  }
	}
  
	toggleCard(type: string) {
	  this[`is${type}Visible`] = !this[`is${type}Visible`];
	}
  
	goBack() {
	  this.location.back();
	}
  }
  