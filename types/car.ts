export interface Car {
  vin: string;
  plate: string | null;
  is_active: boolean;
  last_state: {
    display_name: string;
    charge_state: {
      battery_level: number;
      charging_state: string;
      charge_limit_soc: number;
      battery_range: number;
    };
    vehicle_state: {
      odometer: number;
      vehicle_name: string;
    };
    vehicle_config: {
      car_type: string;
      exterior_color: string;
      trim_badging: string;
    };
  };
}
