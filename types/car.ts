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
      vehicle_created_at: number;
    };
    vehicle_config: {
      car_type: string;
      exterior_color: string;
      trim_badging: string;
    };
  };
}

export interface CarState {
  vin: string;
  plate: string | null;
  is_active: boolean;

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
    vehicle_created_at: number;
  };
  vehicle_config: {
    car_type: string;
    exterior_color: string;
    trim_badging: string;
  };
}

export interface HistoricalStateResponse {
  results: {
    ids: number[];
    timestamps: number[];
    states: string[];
    charging_states: string[];
    shift_states: string[];
    battery_levels: number[];
    usable_battery_levels: number[];
    battery_ranges: number[];
    ideal_battery_ranges: number[];
    latitudes: number[];
    longitudes: number[];
    elevations: number[];
    speeds: number[];
    powers: number[];
    odometers: number[];
    charge_rates: number[];
    charger_actual_currents: number[];
    charger_powers: number[];
    charger_phasess: number[];
    charger_voltages: number[];
    charge_energy_addeds: number[];
    charge_miles_added_rateds: number[];
    charge_miles_added_ideals: number[];
    is_climate_ons: number[];
    battery_heater_ons: number[];
    inside_temps: number[];
    outside_temps: number[];
    lockeds: number[];
    sentry_modes: number[];
    lifetime_energy_used: number[];
    energy_remaining: number[];
    pack_current: (number | null)[];
    pack_voltage: (number | null)[];
    module_temp_min: number[];
    module_temp_max: number[];
  };
}

export interface HistoricalState {
  timestamp: number;
  state: string;
  charge_state: {
    battery_level: number;
    battery_range: number;
    charging_state: string;
    charger_power: number;
    charger_voltage: number;
    charge_energy_added: number;
  };
  climate_state: {
    is_climate_on: boolean;
    inside_temp: number;
    outside_temp: number;
  };
  vehicle_state: {
    odometer: number;
    locked: boolean;
    sentry_mode: boolean;
  };
  drive_state: {
    speed: number;
    power: number;
    latitude: number;
    longitude: number;
    elevation: number;
  };
}

export interface MonthlyStats {
  month: string;
  avgBatteryLevel: number;
  avgRange: number;
  totalDistance: number;
  readings: number;
}
