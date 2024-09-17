'use client'

// import styled from 'styled-components'

// const StyledGlowingText = styled.span`
//   background-image: linear-gradient(90deg, oklch(var(--s)) 4%, color-mix(in oklch, oklch(var(--s)), oklch(var(--er))) 22%, oklch(var(--p)) 45%, color-mix(in oklch, oklch(var(--p)), oklch(var(--a))) 67%, oklch(var(--a)) 100.2%);
// `

interface GlowingTextProps {
  text: string
  tailwindGradient?: string
  className?: string
}

function GlowingText (props: GlowingTextProps): React.JSX.Element {
  /** @see Optional: Configure gradient through the Tailwind rules. */
  // const defaultTailwindGradient = `
  //   bg-gradient-to-r
  //   from-secondary from-15%
  //   via-error
  //   via-primary via-40%
  //   to-accent to-102%
  // `

  const defaultTailwindRules = `
  relative col-start-1 row-start-1 -- bg-clip-text text-transparent -- pointer-events-none
  `

  return (
    <>
      <div id="GlowingText" className={`text-5xl font-extrabold -- relative inline-grid -- ${props.className}`}>
        <span
          aria-hidden="true"
          data-text={props.text}
          className={`daisyui-glow-effect ${defaultTailwindRules} -- before:content-[attr(data-text)] blur-xl`} >
        </span>
        <span
          className={`daisyui-glow-effect ${defaultTailwindRules} `}
        >
          {props.text}
        </span>
      </div>
    </>
  )
}

export default GlowingText