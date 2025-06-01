# Integración Polkadot.js en PolkaJobs

Esta documentación explica cómo está implementada la integración con Polkadot.js en el proyecto PolkaJobs.

## 🚀 Instalación Completada

Ya se han instalado todas las dependencias necesarias:

```bash
yarn add @polkadot/api @polkadot/extension-dapp @polkadot/util @polkadot/util-crypto @polkadot/keyring
```

## 📁 Estructura de Archivos

```
src/
├── composables/
│   └── usePolkadot.js          # Composable principal de Polkadot
├── components/
│   ├── WalletConnector.vue     # Componente para conectar wallets
│   └── PaymentComponent.vue    # Componente para pagos en DOT
├── config/
│   └── polkadot.js            # Configuración de redes
└── views/
    └── PolkadotDemo.vue       # Página de demostración
```

## 🔧 Componentes Principales

### 1. `usePolkadot.js` - Composable Principal
Maneja toda la lógica de conexión con Polkadot:
- ✅ Conexión a diferentes redes (Polkadot, Kusama, Westend, Local)
- ✅ Gestión de wallets y cuentas
- ✅ Consulta de balances
- ✅ Realización de transferencias
- ✅ Manejo de errores y estados

### 2. `WalletConnector.vue` - Conexión de Wallet
Componente UI para conectar wallets:
- ✅ Botón de conexión
- ✅ Selector de cuentas múltiples
- ✅ Información de balance y red
- ✅ Selector de red
- ✅ Estados de error

### 3. `PaymentComponent.vue` - Pagos en DOT
Componente para realizar pagos:
- ✅ Formulario de pago
- ✅ Validación de campos
- ✅ Procesamiento de transacciones
- ✅ Historial de pagos

## 🌐 Redes Soportadas

| Red | RPC | Símbolo | Uso |
|-----|-----|---------|-----|
| **Polkadot** | `wss://rpc.polkadot.io` | DOT | Mainnet |
| **Kusama** | `wss://kusama-rpc.polkadot.io` | KSM | Kusama mainnet |
| **Westend** | `wss://westend-rpc.polkadot.io` | WND | Testnet (recomendado para desarrollo) |
| **Local** | `ws://127.0.0.1:9944` | UNIT | Nodo local |

## 🎯 Uso Básico

### 1. Usar el Composable
```vue
<script setup>
import { usePolkadot } from '@/composables/usePolkadot'

const {
  isApiReady,
  selectedAccount,
  balance,
  connectWallet,
  transfer
} = usePolkadot()
</script>
```

### 2. Conectar Wallet
```vue
<template>
  <WalletConnector />
</template>
```

### 3. Realizar Pagos
```vue
<template>
  <PaymentComponent
    service-name="Mi Servicio"
    price="5.0"
    provider-name="Proveedor"
    provider-address="5GrwvaEF5zXb26Fz9rcQpDWS57CtERHpNehXCPcNoHGKutQY"
    @payment-success="onPaymentSuccess"
    @payment-error="onPaymentError"
  />
</template>
```

## 🛠️ Desarrollo y Testing

### 1. Prerrequisitos
- Instalar [Polkadot.js Extension](https://polkadot.js.org/extension/)
- Crear/importar una cuenta en la extensión
- Para testear: obtener tokens WND del [faucet de Westend](https://faucet.polkadot.io/)

### 2. Ejecutar el Proyecto
```bash
yarn dev
```

### 3. Acceder al Demo
Navega a `/polkadot-demo` para ver la integración completa en acción.

## ⚠️ Consideraciones de Seguridad

1. **Validación de Direcciones**: Siempre validar direcciones de destino
2. **Confirmación de Transacciones**: Mostrar detalles antes de firmar
3. **Manejo de Errores**: Gestionar todos los casos de error posibles
4. **Red Correcta**: Verificar que el usuario esté en la red correcta

## 🔍 Debugging

### Errores Comunes

1. **"No se encontró la extensión"**
   - Instalar Polkadot.js Extension
   - Refrescar la página

2. **"API Desconectada"**
   - Verificar conexión a internet
   - Probar cambiar de red

3. **"Fondos insuficientes"**
   - Verificar balance de la cuenta
   - Usar faucet para testnet

### Logs
El composable incluye logs detallados:
```javascript
console.log('✅ Conectado a Polkadot API:', networkConfig.name)
console.log('✅ Wallet conectada:', allAccounts.length, 'cuentas')
console.log('✅ Transferencia enviada:', hash.toHex())
```

## 📚 Recursos Adicionales

- [Polkadot.js API Documentation](https://polkadot.js.org/docs/)
- [Polkadot Wiki](https://wiki.polkadot.network/)
- [Substrate Documentation](https://docs.substrate.io/)
- [ink! Smart Contracts](https://use.ink/)

## 🎉 Próximos Pasos

Para expandir la integración, considera implementar:

1. **Subscripciones a Eventos**: Escuchar eventos de la blockchain
2. **Smart Contracts**: Integración con contratos ink!
3. **Staking**: Funcionalidades de staking
4. **Governance**: Participación en governance
5. **NFTs**: Manejo de NFTs
6. **Multi-sig**: Cuentas multi-firma

## 🤝 Contribución

Para contribuir a la integración de Polkadot.js:

1. Fork el repositorio
2. Crea una rama para tu feature
3. Implementa mejoras o correcciones
4. Envía un Pull Request

---

**¡La integración de Polkadot.js está lista! 🎊**

Ahora PolkaJobs puede:
- ✅ Conectar wallets de Polkadot
- ✅ Realizar pagos en DOT/KSM/WND
- ✅ Conectar a múltiples redes
- ✅ Manejar múltiples cuentas
- ✅ Mostrar balances en tiempo real
