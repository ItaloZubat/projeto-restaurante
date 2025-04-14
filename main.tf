provider "azurerm" {
  features {}

  subscription_id = "06fb7ba2-5a7c-4176-9637-d3b4ecd075b8"
  tenant_id       = "4a22f116-51ce-4fe3-aeaa-9c46143d088b"
}

resource "azurerm_resource_group" "rg" {
  name     = "rg-sabor-caseiro"
  location = "East US"
}

resource "azurerm_app_service_plan" "plan" {
  name                = "appserviceplan-saborcaseiro"
  location            = azurerm_resource_group.rg.location
  resource_group_name = azurerm_resource_group.rg.name
  kind                = "Linux"
  reserved            = true

  sku {
    tier = "Basic"
    size = "B1"
  }
}

resource "azurerm_app_service" "app" {
  name                = "app-sabor-caseiro"
  location            = azurerm_resource_group.rg.location
  resource_group_name = azurerm_resource_group.rg.name
  app_service_plan_id = azurerm_app_service_plan.plan.id

  site_config {
    linux_fx_version = "NODE|18-lts"  # Pode mudar para "PYTHON|3.10", etc.
  }

  app_settings = {
    "WEBSITES_ENABLE_APP_SERVICE_STORAGE" = "false"
    "DATABASE_URL"                        = "postgres://<username>:<password>@<host>:5432/saborcaseiro"
  }
}

output "app_service_url" {
  value       = "https://${azurerm_app_service.app.default_site_hostname}"
  description = "URL pública da aplicação web"
}