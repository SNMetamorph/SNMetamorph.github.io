---
slug: exceptions-win32
title: Windows typical exception codes cheatsheet
authors: snmetamorph
---

For somehow strange reason, there is no handy list of common Windows application exception codes list on the
entire Internet. At least, I can't find it in Google. So I decided to make this one here. Also I think in future this list can be extended with more info.

| Exception code  | Name                                | Cause of exception                               |
|-----------------|-------------------------------------|--------------------------------------------------|
| 0xC0000005      | STATUS_ACCESS_VIOLATION 	        | Reading or writing to an inaccessible memory location |
| 0x80000003      | STATUS_BREAKPOINT 	                | Encountering a hardware-defined breakpoint; used only by debuggers |
| 0x80000002      | STATUS_DATATYPE_MISALIGNMENT 	    | Reading or writing to data at an address that is not properly aligned; for example, 16-bit entities must be aligned on 2-byte boundaries (Not applicable to Intel 80x86 processors) |
| 0xC000008E      | STATUS_FLOAT_DIVIDE_BY_ZERO 	    | Dividing floating-point type by 0.0 |
| 0xC0000091      | STATUS_FLOAT_OVERFLOW 	            | Exceeding maximum positive exponent of floating-point type |
| 0xC0000093      | STATUS_FLOAT_UNDERFLOW 	            | Exceeding magnitude of lowest negative exponent of floating-point type |
| 0xC000001D      | STATUS_ILLEGAL_INSTRUCTION 	        | Attempting to execute an instruction code not defined by the processor |
| 0xC0000096      | STATUS_PRIVILEGED_INSTRUCTION 	    | Executing an instruction not allowed in current machine mode |
| 0xC0000094      | STATUS_INTEGER_DIVIDE_BY_ZERO 	    | Dividing an integer type by 0 |
| 0xC0000095      | STATUS_INTEGER_OVERFLOW 	        | Attempting an operation that exceeds the range of the integer |
| 0x80000004      | STATUS_SINGLE_STEP 	                | Executing one instruction in single-step mode; used only by debuggers |
