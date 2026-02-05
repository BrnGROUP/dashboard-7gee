const registros = [

/* =========================
   EE PROFESSOR LOUREIRO
========================= */
{
  escola: "EE Professor Loureiro",
  programa: "PRA",
  exercicio: "2024",
  status: "NA",
  problema: "Prestação de contas não apresentada no prazo legal.",
  falta: "Abrir processo SEI, anexar relatório de execução, extratos e notas fiscais.",
  prioridade: "ALTÍSSIMA"
},
{
  escola: "EE Professor Loureiro",
  programa: "PEH",
  exercicio: "2024",
  status: "ADD",
  problema: "Inconsistência entre extrato bancário e notas fiscais.",
  falta: "Revisar conciliação bancária e reapresentar documentação corrigida.",
  prioridade: "ALTA"
},

/* =========================
   EE JUVENAL LOPES F. DE OMENA
========================= */
{
  escola: "EE Juvenal Lopes Ferreira de Omena",
  programa: "PRA",
  exercicio: "2024",
  status: "NA",
  problema: "Processo de prestação não iniciado.",
  falta: "Abertura de processo SEI e envio completo da documentação.",
  prioridade: "ALTÍSSIMA"
},
{
  escola: "EE Juvenal Lopes Ferreira de Omena",
  programa: "PEH",
  exercicio: "2024",
  status: "NA",
  problema: "Prestação de contas não apresentada.",
  falta: "Montar prestação completa com documentos financeiros.",
  prioridade: "ALTÍSSIMA"
},

/* =========================
   EE ARISTHEU DE ANDRADE
========================= */
{
  escola: "EE Aristheu de Andrade",
  programa: "PRA",
  exercicio: "2024",
  status: "NA",
  problema: "Prestação não apresentada.",
  falta: "Processo SEI completo.",
  prioridade: "ALTA"
},
{
  escola: "EE Aristheu de Andrade",
  programa: "PEH",
  exercicio: "2024",
  status: "AP",
  problema: "Processo enviado, aguardando análise da GEPCO.",
  falta: "Aguardar análise ou responder diligência.",
  prioridade: "MÉDIA"
},

/* =========================
   EE MONSENHOR LUIZ CARLOS
========================= */
{
  escola: "EE Monsenhor Luiz Carlos de Oliveira Barbosa",
  programa: "PRA",
  exercicio: "2024",
  status: "NA",
  problema: "Prestação não apresentada.",
  falta: "Abertura de processo SEI.",
  prioridade: "ALTA"
},
{
  escola: "EE Monsenhor Luiz Carlos de Oliveira Barbosa",
  programa: "PEH",
  exercicio: "2024",
  status: "ADD",
  problema: "Diligência recorrente por falhas documentais.",
  falta: "Ajustar documentos conforme despacho da GEPCO.",
  prioridade: "ALTA"
},

/* =========================
   EE MANOEL DE MATOS
========================= */
{
  escola: "EE Manoel de Matos",
  programa: "PRA",
  exercicio: "2024",
  status: "NA",
  problema: "Prestação não apresentada.",
  falta: "Processo SEI completo.",
  prioridade: "ALTA"
},
{
  escola: "EE Manoel de Matos",
  programa: "PEH",
  exercicio: "2024",
  status: "AP",
  problema: "Prestação apresentada via SEI, sem análise.",
  falta: "Aguardar GEPCO ou responder diligência.",
  prioridade: "MÉDIA"
},

/* =========================
   EE CARLOS LYRA
========================= */
{
  escola: "EE Carlos Lyra",
  programa: "PRA",
  exercicio: "2024",
  status: "NA",
  problema: "Processo não iniciado.",
  falta: "Abertura de processo SEI.",
  prioridade: "ALTÍSSIMA"
},
{
  escola: "EE Carlos Lyra",
  programa: "PEH",
  exercicio: "2024",
  status: "ADD",
  problema: "Inconsistência financeira apontada em diligência.",
  falta: "Revisar valores e reapresentar documentos.",
  prioridade: "ALTA"
},

/* =========================
   EE PADRE TEÓFANES
========================= */
{
  escola: "EE Padre Teófanes Augusto de Araújo Barros",
  programa: "PRA",
  exercicio: "2024",
  status: "AP",
  problema: "Processo em tramitação.",
  falta: "Aguardar análise da GEPCO.",
  prioridade: "MÉDIA"
},

/* =========================
   EE DR. CARLOS GOMES DE BARROS
========================= */
{
  escola: "EE Dr. Carlos Gomes de Barros",
  programa: "PRA",
  exercicio: "2024",
  status: "NA",
  problema: "Prestação não apresentada.",
  falta: "Montar processo SEI completo.",
  prioridade: "ALTÍSSIMA"
},
{
  escola: "EE Dr. Carlos Gomes de Barros",
  programa: "PEH",
  exercicio: "2024",
  status: "NA",
  problema: "Ausência total de prestação.",
  falta: "Organizar toda documentação financeira.",
  prioridade: "ALTÍSSIMA"
},

/* =========================
   EE DR. JORGE DE LIMA
========================= */
{
  escola: "EE Dr. Jorge de Lima",
  programa: "PRA",
  exercicio: "2024",
  status: "AP",
  problema: "Processo aguardando análise.",
  falta: "Aguardar GEPCO ou diligência.",
  prioridade: "MÉDIA"
},

/* =========================
   EE DR. PAULO DE CASTRO SARMENTO
========================= */
{
  escola: "EE Dr. Paulo de Castro Sarmento",
  programa: "PRA",
  exercicio: "2024",
  status: "NA",
  problema: "Prestação não apresentada.",
  falta: "Abrir processo SEI e anexar documentos.",
  prioridade: "ALTÍSSIMA"
},
{
  escola: "EE Dr. Paulo de Castro Sarmento",
  programa: "PEH",
  exercicio: "2024",
  status: "NA",
  problema: "Processo inexistente.",
  falta: "Instrução completa da prestação.",
  prioridade: "ALTÍSSIMA"
},

/* =========================
   EE MONSENHOR CLÓVIS DUARTE
========================= */
{
  escola: "EE Monsenhor Clóvis Duarte de Barros",
  programa: "PRA",
  exercicio: "2024",
  status: "AP",
  problema: "Processo iniciado.",
  falta: "Aguardar análise da GEPCO.",
  prioridade: "MÉDIA"
},

/* =========================
   EE ROCHA CAVALCANTI
========================= */
{
  escola: "EE Rocha Cavalcanti",
  programa: "PRA",
  exercicio: "2024",
  status: "NA",
  problema: "Prestação não iniciada.",
  falta: "Montar processo SEI completo.",
  prioridade: "ALTÍSSIMA"
},
{
  escola: "EE Rocha Cavalcanti",
  programa: "PEH",
  exercicio: "2024",
  status: "NA",
  problema: "Ausência de prestação.",
  falta: "Organizar toda documentação.",
  prioridade: "ALTÍSSIMA"
},

/* =========================
   EE PROFª BENEDITA MARIA RUFINO
========================= */
{
  escola: "EE Profª Benedita Maria Rufino",
  programa: "PRA",
  exercicio: "2024",
  status: "AP",
  problema: "Processo iniciado.",
  falta: "Aguardar análise / responder diligência.",
  prioridade: "MÉDIA"
}

];
