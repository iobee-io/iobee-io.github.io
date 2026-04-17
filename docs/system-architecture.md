# Arquitetura do Sistema IO Bee

## 1. Objetivo

Este documento consolida a arquitetura de referencia do IO Bee e serve como base para esquematico, firmware, mecanica e estrategia de produto.

## 2. Posicionamento

O IO Bee e uma infraestrutura inteligente de sinais industriais, com foco em:

- aquisicao e atuacao de sinais
- diagnostico eletrico profundo
- integracao IIoT nativa
- instalacao modular em slices
- manutencao preditiva

O produto deve ser entendido como uma plataforma de instrumentacao distribuida para retrofit e monitoramento inteligente de paineis industriais.

## 3. Topologia da ilha

```text
[Fonte 24V]
   |
[Gateway Bee]
   |
[Modulos IO]
   |
[Power Injector (opcional)]
   |
[Mais modulos IO]
   |
[End Cap ativo]
```

### Regras de segmentacao energetica

- ate aproximadamente 8 modulos sem reinjecao
- ate aproximadamente 20 modulos com Power Injector
- barramento projetado para 8 A nominal e 11 A de projeto

## 4. Barramento lateral Bee

### Conector

- board-to-board 2x8 vias
- 16 pinos totais
- passo aproximado de 2.54 mm
- stack mecanico aproximado de 8 a 10 mm

### Pinagem funcional

#### Potencia

- 4 pinos paralelos de +24 V
- 4 pinos paralelos de GND

#### Comunicacao

- CAN-H
- CAN-L

#### Sistema

- Shield
- Detect IN
- Detect OUT

#### Reservas futuras

- RS485
- AUX
- ID bus

### Premissas eletricas

- trilhas e distribuicao de corrente reforcadas
- multiplas vias para corrente e retorno
- foco em baixa resistencia longitudinal
- preparacao para expansao modular continua

## 5. Comunicacao interna

### Rede adotada

- CANopen

### Funcoes desejadas

- descoberta automatica dos modulos
- heartbeat diagnostico
- sincronismo deterministico
- supervisao central pelo gateway

### Papel do gateway

- NMT master
- agregador de telemetria
- tradutor multiprotocolo
- ponto de configuracao da ilha

## 6. Gateway multiprotocolo

O gateway Bee deve atuar como o ponto de integracao entre a ilha e o sistema externo.

### Interfaces previstas

- Wi-Fi com MQTT
- Ethernet opcional/configuravel
- RS485 master para coleta de dispositivos de campo
- RS485 slave para exposicao da ilha a PLCs
- CAN master para orquestracao interna

### Proposta de valor

Gateway universal de retrofit industrial, capaz de concentrar dados de I/O, saude eletrica e diagnosticos de comunicacao.

## 7. Modulos da plataforma

### 7.1 CORE SLICE

Primeiro modulo de engenharia detalhada. Deve validar:

- alimentacao local
- barramento lateral
- interface CAN
- sensores minimos de saude
- termica
- EMC

### 7.2 DO

Diagnosticos minimos:

- shunt de corrente por canal
- monitoramento de hotspot termico
- contagem de ciclos

### 7.3 DI

Diagnosticos minimos:

- analise temporal
- analise de frequencia
- deteccao de instabilidade de sinal

### 7.4 AI

Diagnosticos minimos:

- ADC de precisao
- medicao de ruido
- medicao de impedancia dinamica do loop

### 7.5 AO

Diagnosticos minimos:

- feedback de corrente real
- comparacao entre comando e atuacao

## 8. Sensores minimos por tipo de modulo

### CORE de todos os modulos

- medicao da tensao do barramento local
- NTC de temperatura
- supervisor de brownout

### Power Injector

- medicao de corrente do segmento
- tensao upstream
- tensao downstream

### End Cap ativo

- tensao final do barramento
- ripple estimado
- integridade fisica da extremidade
- temperatura local

## 9. Telemetria eletrica avancada

Cada modulo deve reportar ao gateway quatro grupos de informacao:

### Dados de processo

- estado de I/O
- valor analogico
- comando
- feedback

### Qualidade de sinal

- ruido RMS
- estabilidade
- drift

### Saude eletrica

- tensao local
- temperatura do modulo
- carga media

### Diagnostico operacional

- ciclos de DO
- erros CAN
- eventos de subtensao

Essa telemetria e a base do diferencial do produto em manutencao preditiva.

## 10. Medicao de impedancia do loop AI

Metodo previsto:

- micro-perturbacao controlada
- resistor de teste com chaveamento por MOSFET
- leitura do delta de corrente e tensao

Falhas ou degradacoes que devem ser inferiveis:

- cabo degradando
- sensor em falha
- curto parcial
- saturacao de entrada

## 11. Premissas ambientais e eletricas

- temperatura de projeto: 70 C
- DO: 0.5 A por canal
- DO: 2 A por modulo total
- barramento lateral do sistema: 8 A nominal

## 12. End Cap ativo

Objetivos funcionais:

- terminacao CAN fixa
- fechamento da detect chain
- medicao de tensao ao final da ilha
- estimativa de ripple
- medicao de temperatura

Objetivo sistemico:

Permitir diagnostico longitudinal completo da ilha, incluindo degradacao de distribuicao energetica ao longo do conjunto.

## 13. Roadmap tecnico imediato

### Fase 1

Desenvolver esquematico completo do CORE SLICE.

### Fase 2

Derivar familias de modulo:

- DO
- DI
- AI
- AO

### Fase 3

Fechar arquitetura completa de firmware, telemetria e integracao MQTT.
