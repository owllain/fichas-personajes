from pathlib import Path
import re
p=Path(__file__).resolve().parent
s=(p/'kazui.source.css').read_text(encoding='utf-8')
def rule(m):
    selector,body=m.groups()
    if '@font-face' in selector or selector.strip() in ('from','to','0%','100%'): return m.group(0)
    declarations=[]
    for d in body.split(';'):
        if ':' in d and d.strip(): d=d.rstrip()+' !important'
        declarations.append(d)
    return selector+'{'+ ';'.join(declarations)+'}'
compiled=re.sub(r'([^{}]+)\{([^{}]*)\}',rule,s)
(p/'kazui.css').write_text(compiled,encoding='utf-8')
(p/'kazui-png.css').write_text(compiled.replace('.svg','.png'),encoding='utf-8')
