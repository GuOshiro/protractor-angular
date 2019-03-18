import { Component } from "@angular/core";
import { Input } from "@angular/core";
import { AlertService } from "./alert.service";
import { Alert, AlertType } from "./alert";


@Component({
    selector: 'ap-alert',
    templateUrl: './alert.component.html'
})
export class AlertComponent {

    @Input() timeout = 3000;
    alerts: Alert[] = [];

    constructor(private AlertService: AlertService) {

        this.AlertService
            .getAlert()
            .subscribe(alert => {
                if(!alert) {
                    this.alerts = [];
                    return;
                }
                this.alerts.push(alert);
                setTimeout(() => this.removeAlert(alert), this.timeout);
            })
    }

    removeAlert(alertToRemove: Alert) {
        this.alerts = this.alerts.filter(alert => alert != alertToRemove);
    }

    getAlertClass(alert: Alert) {

        if(!alert) return '';

        switch (alert.alertType) {

            case AlertType.DANGER:
                return 'alert alert-danger';
            case AlertType.INFO:
                return 'alert alert-info';
            case AlertType.SUCCESS:
                return 'alert alert-success';
            case AlertType.WARNING:
                return 'alert alert-warning';
        }
    }
}