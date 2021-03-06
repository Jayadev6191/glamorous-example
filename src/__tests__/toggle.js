import React from 'react'
import {render, mount} from 'enzyme'
import Toggle from '../Toggle'

test('initializes as toggled off default', () => {
  const wrapper = renderToggle()
  expect(wrapper).toMatchSnapshotWithGlamor()
})

test('can be initialized to toggled on', () => {
  const wrapper = renderToggle({initialToggledOn: true})
  expect(wrapper).toMatchSnapshotWithGlamor()
})

test('invokes the onToggle prop when clicked', () => {
  const onToggle = jest.fn()
  const wrapper = mountToggle({onToggle})
  clickButton(wrapper)
  expect(onToggle).toHaveBeenCalledTimes(1)
  expect(onToggle).toBeCalledWith(true)
  expect(onToggle).toMatchSnapshotWithGlamor()
})

/**
 * Uses enzyme to mount the Toggle component
 * @param {Object} props - the props to mount the component with
 * @return {Object} - the enzyme wrapper
 */
function mountToggle(props = {}) {
  return mount(<Toggle onToggle={() => {}} children="Toggle Me" {...props} />)
}

/**
 * Uses enzyme to render the Toggle component
 * @param {Object} props - the props to render the component with
 * @return {Object} - the enzyme wrapper
 */
function renderToggle(props = {}) {
  return render(<Toggle onToggle={() => {}} children="Toggle Me" {...props} />)
}

/**
 * finds the button in the given wrapper and simulates a click event
 * @param {Object} wrapper - the enzyme wrapper
 */
function clickButton(wrapper) {
  wrapper.find('button').first().simulate('click')
}

/**
 * Returns whether the root of the given wrapper has the given className
 * @param {Object} wrapper - the wrapper to get the root element from
 * @param {String} className - the class to check for
 * @return {Boolean} whether the root element has the given class
 */
function rootHasClass(wrapper, className) {
  return wrapper.children().first().hasClass(className)
}
